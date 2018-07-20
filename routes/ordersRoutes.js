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

var mongoose = require('mongoose');
const url = 'mongodb+srv://naor:naor1@cluster0-r43t1.mongodb.net/TalmorTex?retryWrites=true';
const connect = mongoose.connect(url);

ordersRoutes.route('/')
    .get((req, res, next) => {
        console.log((Math.round(new Date() / 1000)) - 300);
        var db = mongoose.connection;
        db.once('open', () => {
            console.log('Open');
            Orders.find(function (err, orders) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(orders);
                }
            })
        });
        res.send(ord);
    });

module.exports = ordersRoutes;