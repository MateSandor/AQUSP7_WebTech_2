"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const partSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    brand: { type: String, required: true }
}, {
    versionKey: false
});
exports.PartSchema = mongoose_1.default.model('Parts', partSchema);
