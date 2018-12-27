import * as express from 'express';

class App {
    public express;

    constructor() {
        this.express = express();
        this.initApp();
    }

    initApp(): void {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.send('hello world');
        });

        this.express.use('/', router);
    }
}

export default new App().express;