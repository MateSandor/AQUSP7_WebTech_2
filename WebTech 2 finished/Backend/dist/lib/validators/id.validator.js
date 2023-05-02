"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidId = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const getValidId = (id) => {
    const validId = new mongoose_1.default.Types.ObjectId(id);
    try {
        return validId;
    }
    catch (error) {
        return '';
    }
};
exports.getValidId = getValidId;
