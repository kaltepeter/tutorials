"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
/** firefunctions/functions/index.ts **/
require("core-js");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const express = require("express");
admin.initializeApp(functions.config().firebase);
var contactsRef = admin.database().ref('/contacts');
exports.addContact = functions.https.onRequest((request, response) => {
    cors()(request, response, () => {
        contactsRef.push({
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            phone: request.body.phone,
            email: request.body.email
        });
    });
    response.send({
        'msg': 'Done', 'data': {
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            phone: request.body.phone,
            email: request.body.email
        }
    });
});
exports.getContactList = functions.https.onRequest((request, response) => {
    contactsRef.once('value', (data) => {
        response.send({
            'res': data.val()
        });
    })
        .catch((err) => {
        console.log("error: ", err);
    });
});
const app = express();
app.use(cors({ origin: true }));
app.put('/:id', (req, res, next) => {
    admin.database().ref('/contacts/' + req.params.id).update({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email
    })
        .catch((err) => {
        console.log("error: ", err);
    });
    res.send(req.body);
    next();
});
app.delete('/:id', (req, res, next) => {
    admin.database().ref('/contacts/' + req.params.id).remove()
        .catch((err) => {
        console.log("error: ", err);
    });
    res.send(req.params.id);
    next();
});
app.get('/:id', (req, res, next) => {
    admin.database().ref('/contacts/' + req.params.id).once('value', (data) => {
        var sn = data.val();
        res.send({
            'res': sn
        });
        next();
    }, (err) => res.send({ res: err }))
        .catch((err) => {
        console.log("error: ", err);
    });
});
exports.getContact = functions.https.onRequest((request, response) => {
    return app(request, response);
});
exports.updateContact = functions.https.onRequest((request, response) => {
    return app(request, response);
});
exports.deleteContact = functions.https.onRequest((request, response) => {
    return app(request, response);
});
//# sourceMappingURL=index.js.map