"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routers_1 = require("./routes/routers");
class App {
    initApp() {
        routers_1.InitRoutes.routes(this.app);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map