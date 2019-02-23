const request = require('supertest');
const app = require('./app');
const redis = require('redis');
const client = redis.createClient();
client.select('test'.length);
client.flushdb();

describe('Requests to the root path', () => {
    it('returns a 200 status code', (done) => {
        request(app)
            .get('/')
            .expect(200, done);
    });

    it('returns a HTML format', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /html/, done);
    });

    it('returns an index file with Cities', (done) => {
        request(app)
            .get('/')
            .expect(/cities/i, done);
    })
});

describe('Listing cities on /cities', () => {
    it('Returns 200 status code', (done) => {
        'use strict';
        request(app)
            .get('/cities')
            .expect(200, done);
    });

    it('Returns JSON format', (done) => {
        request(app)
            .get('/cities')
            .expect('Content-Type', /json/, done);
    });

    it('Returns initial cities', (done) => {
        request(app)
            .get('/cities')
            .expect(JSON.stringify([]), done);
    });
});

describe('Creating new cities', () => {
    it('returns a 201 status code', (done) => {
        request(app)
            .post('/cities')
            .send('name=Springfield&description=where+the+simpsons+live')
            .expect(201, done);
    });

    it('return the city name', (done) => {
        request(app)
            .post('/cities')
            .send('name=Springfield&description=where+the+simpsons+live')
            .expect(/springfield/i, done);
    });

    it('validates city name and description', (done) => {
        request(app)
            .post('/cities')
            .send('name=&description=')
            .expect(400, done);
    });
});

describe('deleting cities', () => {

    before(() => {
        client.hset('cities', 'Banana', 'a tasty fruit');
    });

    after(() => {
        client.flushdb();
    });


    it('returns a 204 status code', (done) => {
        request(app)
            .delete('/cities/Banana')
            .expect(204, done);
    });
});

describe('shows city info', () => {
    before(() => {
        client.hset('cities', 'Banana', 'a tasty city');
    });
    
    after(() => {
        client.flushdb();
    });
    
    it('returns 200 status code', (done) => {
        request(app)
            .get('/cities/Banana')
            .expect(200, done);
    });

    it('returns HTML format', (done) => {
        request(app)
            .get('/cities/Banana')
            .expect('Content-Type', /html/, done);
    });

    it('returns information for a given city', (done) => {
        request(app)
            .get('/cities/Banana')
            .expect(/tasty/, done);
    });
});