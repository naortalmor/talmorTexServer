"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb");
const env = require("dotenv");
class AbstractServer {
    static init(callback) {
        let app = express();
        app.use(bodyParser.json());
        AbstractServer.initDbConnection();
        AbstractServer.initCors(app);
        this.config = env.config();
        const port = this.config.process.env.PORT || 1112;
        app.listen(port, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(`server is listening on ${port}`);
                callback(app);
            }
        });
    }
    static initDbConnection() {
        const uri = `mongodb://${this.config.process.env.DB_USER_NAME}:${this.config.process.env.DB_PASSWORD}@cluster0-shard-00-00-r43t1.mongodb.net:27017,cluster0-shard-00-01-r43t1.mongodb.net:27017,cluster0-shard-00-02-r43t1.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`;
        MongoClient.connect(uri, (err, db) => {
            if (err) {
                console.log('There was an error with connection to DB');
            }
            else {
                AbstractServer.orm = db.db('TalmorTex').collection('orders');
                console.log('connected to DB');
            }
        });
    }
    static initCors(app) {
        app.use((req, res, next) => {
            res.setHeader('Content-Type', 'text/plain');
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            next();
        });
    }
}
exports.AbstractServer = AbstractServer;
//# sourceMappingURL=abstract-server.js.map