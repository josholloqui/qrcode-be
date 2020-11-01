"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const qrcodes_1 = __importDefault(require("./routers/qrcodes"));
const database_1 = __importDefault(require("./utils/database"));
const config_1 = __importDefault(require("./utils/config"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }
    config() {
        this.app.set('port', config_1.default.app.PORT);
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json({ limit: '1mb' }));
    }
    dbConnect() {
        database_1.default.authenticate()
            .then(() => console.log('postgres connected'))
            .catch(err => console.log('Error: ' + err));
    }
    routerConfig() {
        this.app.use('/qrcodes', qrcodes_1.default);
    }
    start() {
        this.config();
        this.app.listen(this.app.get('port'), () => {
            console.log('Server is listening on port ' + this.app.get('port'));
        });
        this.routerConfig();
        this.dbConnect();
    }
}
const server = new Server();
server.start();
module.exports = server.app;
//# sourceMappingURL=server.js.map