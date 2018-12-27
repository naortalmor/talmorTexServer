import * as express from 'express';
import * as MongoClient from 'mongodb';

class App {
    public express;
    public static orm;

    constructor() {
        this.express = express();
        this.initApp();
        this.initDBConnection();
        console.log(App.orm);
    }

    initApp(): void {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.send('hello world');
        });

        this.express.use('/', router);
    }

    initDBConnection() {
        const uri = 'mongodb+srv://mongodb-stitch-talmortex-ovete:naor@cluster0-r43t1.mongodb.net/TalmorTex?retryWrites=true/orders';
        MongoClient.connect(uri, (err, db) => {
            if(err) {
                console.log('There was an error with connection to DB');
            } else {
                App.orm = db;
                console.log('connected to DB')
            }
        });
    }
}

export default new App().express;