const express = require('express');
const Orders = require('../models/orders');

const ordersRoutes = express.Router();
const today = Date;
const ord = [
    { id: 1, orderDate: today, customerName: 'Naor', cost: 1000, height: 1, supplyDate: today, width: 10, status: "New"},
    { id: 2, orderDate: today, customerName: 'Gal', cost: 1100, height: 2, supplyDate: today, width: 10, status: "Ready"},
    { id: 3, orderDate: today, customerName: 'Riki', cost: 1200, height: 3, supplyDate: today, width: 10, status: "Done"},
    { id: 4, orderDate: today, customerName: 'Yovel', cost: 1300, height: 4, supplyDate: today, width: 10, status: "New"},
    { id: 5, orderDate: today, customerName: 'Or', cost: 1400, height: 5, supplyDate: today, width: 10, status: "Matpera"}
];

let mongoose = require('mongoose');
const uri = 'mongodb+srv://mongodb-stitch-talmortex-ovete:naor@cluster0-r43t1.mongodb.net/TalmorTex?retryWrites=true/orders';
mongoose.connect(uri);

ordersRoutes.route('/')
    .get((req, res, next) => {
        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Connection error'));
        db.on('open', function(callback) {
            console.log('Connected to database.');
        });

        Orders.find((err, orders) => {
            if (err) {
                console.log(err);
            } else {
                res.send(orders);
            }
        })
    });

module.exports = ordersRoutes;
