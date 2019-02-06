import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as MongoClient from 'mongodb';

export class AbstractServer {
    static orm;

    static init(callback:Function) {
        let app = express();
        app.use(bodyParser.json());
        AbstractServer.initDbConnection();
        AbstractServer.initCors(app);
        const port = process.env.PORT || 1111;
        app.listen(port, (err) => {
            if(err) {
                console.log(err)
            } else {
                console.log(`server is listening on ${port}`);
                callback(app);
            }
        });
    }

    private static initDbConnection():void {
        const uri = 'mongodb://mongodb-stitch-talmortex-ovete:naor@cluster0-shard-00-00-r43t1.mongodb.net:27017,cluster0-shard-00-01-r43t1.mongodb.net:27017,cluster0-shard-00-02-r43t1.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
        MongoClient.connect(uri, (err, db) => {
            if(err) {
                console.log('There was an error with connection to DB');
            } else {
                AbstractServer.orm = db.db('TalmorTex').collection('orders');
                console.log('connected to DB')
            }
        });
    }

    private static initCors(app:express.Application) {
        app.use((req,res,next) => {
            res.setHeader('Content-Type', 'text/plain');
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            next();
        })
    }
}