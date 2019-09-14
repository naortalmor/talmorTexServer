"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_server_1 = require("../abstract-server/abstract-server");
const mongoDB = require("mongodb");
class Routes {
    static init(app) {
        return __awaiter(this, void 0, void 0, function* () {
            app.get('/', Routes.check);
            app.get('/orders', Routes.getOrders);
            app.post('/orders', Routes.createNewOrder);
            app.post('/orders/update', Routes.updateExistingOrder);
            app.post('/orders/delete', Routes.deleteOrder);
        });
    }
    static check(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).send('Talmor Tex Server Is Running');
        });
    }
    static getOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`get request to get all orders`);
                let orders = yield abstract_server_1.AbstractServer.orm.find({}).toArray();
                res.status(200).send(orders);
            }
            catch (error) {
                console.log(error);
                res.status(404).send(null);
            }
        });
    }
    static createNewOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`get request to create new order`);
                yield abstract_server_1.AbstractServer.orm.insert(req.body);
                res.status(200).send(req.body);
            }
            catch (error) {
                console.log(error);
                res.status(404).send(null);
            }
        });
    }
    static updateExistingOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`got request to update ${req.body['_id']}`);
                const id = mongoDB.ObjectId(req.body['_id']);
                let updatedValue = req.body;
                updatedValue._id = id;
                const query = {
                    _id: id
                };
                const updateValue = {
                    $set: req.body
                };
                yield abstract_server_1.AbstractServer.orm.updateOne(query, updateValue);
                res.status(200).send(req.body);
            }
            catch (error) {
                console.log(error);
                res.status(404).send(null);
            }
        });
    }
    static deleteOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`got request to delete ${req.body['_id']}`);
                const id = mongoDB.ObjectId(req.body['_id']);
                const query = {
                    _id: id
                };
                yield abstract_server_1.AbstractServer.orm.deleteOne(query);
                res.status(200).send(req.body);
            }
            catch (error) {
                console.log(error);
                res.status(404).send(null);
            }
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map