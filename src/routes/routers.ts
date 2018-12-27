import * as express from 'express';

export class InitRoutes {
    public static routes(app):void {
        app.route('/')
            .get((req, res) => {
                res.status(200);
                res.send('Welcome to Naors Server')
            });

        app.route('/orders')
            .get((req,res) => {
                req.app.locals.db.find({}).toArray().then(
                    (result) => {
                        res.send(result);
                    }
                )
            })
    }
}