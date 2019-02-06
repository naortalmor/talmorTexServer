import {AbstractServer} from "../abstract-server/abstract-server";
import * as express from 'express';
import {Routes} from "../routes/routes";

export class TalmorTexServer {
    static run() {
        AbstractServer.init(TalmorTexServer.initApp)
    }

    static initApp(app:express.Application) {
        Routes.init(app);
    }
}