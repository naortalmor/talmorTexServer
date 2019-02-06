import * as express from 'express';
import {Request, Response} from "express";
import {AbstractServer} from "../abstract-server/abstract-server";
import * as mongoDB from 'mongodb';

export class Routes {
    static async init(app:express.Application) {
        app.get('/', Routes.check);
        app.get('/orders', Routes.getOrders);
        app.post('/orders', Routes.createNewOrder);
        app.post('/orders/update', Routes.updateExistingOrder);
        app.post('/orders/delete', Routes.deleteOrder);
    }

    private static async check(req:Request, res:Response) {
        res.status(200).send('Talmor Tex Server Is Running');
    }

    private static async getOrders(req:Request, res:Response) {
        try {
            console.log(`get request to get all orders`);
            let orders = await AbstractServer.orm.find({}).toArray();
            res.status(200).send(orders);
        } catch (error) {
            console.log(error);
            res.status(404).send(null);
        }
    }

    private static async createNewOrder(req:Request, res:Response) {
        try {
            console.log(`get request to create new order`);
            await AbstractServer.orm.insert(req.body);
            res.status(200).send(req.body);
        } catch (error) {
            console.log(error);
            res.status(404).send(null);
        }
    }

    private static async updateExistingOrder(req:Request, res:Response) {
        try {
            console.log(`got request to update ${req.body['_id']}`);
            const id = mongoDB.ObjectId(req.body['_id'] as string);
            let updatedValue = req.body;
            updatedValue._id = id;
            const query = {
                _id: id
            };
            const updateValue = {
                $set: req.body
            };

            await AbstractServer.orm.updateOne(query, updateValue);
            res.status(200).send(req.body);
        } catch (error) {
            console.log(error);
            res.status(404).send(null);
        }
    }

    private static async deleteOrder(req:Request, res:Response) {
        try {
            console.log(`got request to delete ${req.body['_id']}`);
            const id = mongoDB.ObjectId(req.body['_id'] as string);
            const query = {
                _id: id
            };

            await AbstractServer.orm.deleteOne(query);
            res.status(200).send(req.body);
        } catch (error) {
            console.log(error);
            res.status(404).send(null);
        }
    }
}