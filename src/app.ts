import * as express from 'express';
import * as MongoClient from 'mongodb';
import { InitRoutes } from './routes/routers';

class App {
    public app;

    constructor() {
        this.app = express();
        InitRoutes.routes(this.app);
        this.initDBConnection();
    }

    initDBConnection() {
        const uri = 'mongodb://mongodb-stitch-talmortex-ovete:naor@cluster0-shard-00-00-r43t1.mongodb.net:27017,cluster0-shard-00-01-r43t1.mongodb.net:27017,cluster0-shard-00-02-r43t1.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
        MongoClient.connect(uri, (err, db) => {
            if(err) {
                console.log('There was an error with connection to DB');
            } else {
                this.app.locals.db = db.db('TalmorTex').collection('orders');
                console.log('connected to DB')
            }
        });
    }
}

export default new App().app;