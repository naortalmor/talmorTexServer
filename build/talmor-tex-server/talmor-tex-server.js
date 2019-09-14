"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_server_1 = require("../abstract-server/abstract-server");
const routes_1 = require("../routes/routes");
class TalmorTexServer {
    static run() {
        abstract_server_1.AbstractServer.init(TalmorTexServer.initApp);
    }
    static initApp(app) {
        routes_1.Routes.init(app);
    }
}
exports.TalmorTexServer = TalmorTexServer;
//# sourceMappingURL=talmor-tex-server.js.map