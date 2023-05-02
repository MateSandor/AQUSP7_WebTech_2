"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleRegex = exports.nameRegex = exports.partPutProperties = exports.partPostProperties = void 0;
exports.partPostProperties = ['title', 'author', 'brand'];
exports.partPutProperties = ['title', 'author', 'brand'];
exports.nameRegex = new RegExp(/^([A-ZÁÉÚŐÓÜÖŰ]([a-záéúőóüöű.]{1,}\s?)){2,}$/u);
exports.titleRegex = new RegExp(/^([A-ZÁÉÚŐÓÜÖŰ]([a-záéúőóüöű.]{1,}\s?))/u);
