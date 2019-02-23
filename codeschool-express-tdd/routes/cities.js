const express = require('express');
const bodyParser = require('body-parser');
const urlencode = bodyParser.urlencoded({extended: false});

// redis
const redis = require('redis');
let client;

if (process.env.REDISTOGO_URL) {
    const rtg = require('url').parse(process.env.REDISTOGO_URL);
    client = redis.createClient(rtg.port, rtg.hostname);
    client.auth(rtg.auth.split(":")[1]);
} else {
    client = redis.createClient();
    client.select((process.env.NODE_ENV || 'development').length);
}
// end redis connection

const router = express.Router();

router.route('/')
    .get((request, response) => {
        client.hkeys('cities', (error, names) => {
            response.json(names);
        });
    })

    .post(urlencode, (request, response) => {
        let newCity = request.body;
        if (!newCity.name || !newCity.description) {
            response.sendStatus(400);
            return false;
        }
        client.hset('cities', newCity.name, newCity.description, (error) => {
            if (error) throw error;
            response.status(201).json(newCity.name);
        });
    });

router.route('/:name')
    .delete((request, response) => {
        client.hdel('cities', request.params.name, (error) => {
            if (error) throw error;
            response.sendStatus(204);
        })
    })

    .get((request, response) => {
        client.hget('cities', request.params.name, (error, description) => {
            if (error) throw error;
            response.render('show.ejs',
                {
                    city: {
                        name: request.params.name,
                        description: description
                    }
                }
            );
        });
    });

module.exports = router;