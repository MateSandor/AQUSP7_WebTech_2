"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const part_service_1 = __importDefault(require("../services/part.service"));
class CheckMiddlewares {
}
exports.default = CheckMiddlewares;
_a = CheckMiddlewares;
CheckMiddlewares.partService = new part_service_1.default();
CheckMiddlewares.CheckEmptyMiddlewares = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
CheckMiddlewares.CheckPartIdMiddleware = (req, res, next) => {
    _a.partService
        .readPartById(req.body.part)
        .then(() => {
        next();
    })
        .catch(() => res.status(400).json({ message: 'Invalid part!' }));
};
