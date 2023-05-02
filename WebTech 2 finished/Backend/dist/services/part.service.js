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
Object.defineProperty(exports, "__esModule", { value: true });
const part_repository_1 = __importDefault(require("../repos/part.repository"));
class PartService {
    constructor() {
        this.repository = new part_repository_1.default();
    }
    readAllPart() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.getAllPart();
        });
    }
    readPartById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.getPartById(id);
        });
    }
    createPart(newPart) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.postPart(newPart);
        });
    }
    modifyPart(id, part) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.updatePart(id, part);
        });
    }
    removePart(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.deletePart(id);
        });
    }
}
exports.default = PartService;
