"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPart = void 0;
const toPart = (part) => {
    if (!part) {
        return null;
    }
    return {
        id: part._id,
        title: part.title,
        author: part.author,
        brand: part.brand,
    };
};
exports.toPart = toPart;
