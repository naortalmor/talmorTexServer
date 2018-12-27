const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    },
    supplyDate: {
        type: Date,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

let Orders = mongoose.model('Order', orderSchema);
module.exports = Orders;