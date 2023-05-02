"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../lib/logging"));
const axios_1 = __importDefault(require("axios"));
const https_1 = __importDefault(require("https"));
const httpsAgent = new https_1.default.Agent({ rejectUnauthorized: false });
const axiosInstance = axios_1.default.create({ httpsAgent });
class RequestLogMiddleware {
}
exports.default = RequestLogMiddleware;
_a = RequestLogMiddleware;
RequestLogMiddleware.logMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    logging_1.default.info(`[${req.method}] ${req.url} at ${new Date()}`);
    next();
});
