"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const Config_1 = __importDefault(require("./config/Config"));
const part_routes_1 = require("./routes/part.routes");
const logging_1 = __importDefault(require("./lib/logging"));
const requests_log_middleware_1 = __importDefault(require("./middlewares/requests.log.middleware"));
const startServer = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({ origin: '*' }));
    //app.use(express.static('public'));
    app.use(requests_log_middleware_1.default.logMiddleware);
    app.use('/api/parts', part_routes_1.partRoutes);
    logging_1.default.info('Mongo connection is active...');
    app.listen(Config_1.default.SERVER_PORT, () => logging_1.default.success(`Server started at ${new Date()}`));
};
const serverErrorHandler = () => {
    logging_1.default.error('MongoDB connection is fail!');
};
mongoose_1.default.connect(Config_1.default.MONGOOSE_CONNECTION_STRING).then(startServer).catch(serverErrorHandler);
