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
Object.defineProperty(exports, "__esModule", { value: true });
const mapping_1 = require("../lib/mapping");
const part_model_schema_1 = require("../models/schemas/part.model.schema");
class PartRepository {
    getAllPart() {
        return __awaiter(this, void 0, void 0, function* () {
            const partList = yield part_model_schema_1.PartSchema.find();
            return partList.map(mapping_1.toPart);
        });
    }
    getPartById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const part = yield part_model_schema_1.PartSchema.findById(id);
            if (part === null) {
                throw new Error('not found');
            }
            return (0, mapping_1.toPart)(part);
        });
    }
    postPart(newpart) {
        return __awaiter(this, void 0, void 0, function* () {
            const part = yield part_model_schema_1.PartSchema.create(newpart);
            return (0, mapping_1.toPart)(part);
        });
    }
    updatePart(id, part) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield part_model_schema_1.PartSchema.findById(id).then((searchedPart) => {
                if (searchedPart) {
                    searchedPart.set(part);
                    searchedPart.save();
                    return (0, mapping_1.toPart)(searchedPart);
                }
                throw new Error('not found');
            });
        });
    }
    deletePart(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPart = yield part_model_schema_1.PartSchema.findByIdAndDelete(id);
            if (deletedPart) {
                return id;
            }
            throw new Error('not found');
        });
    }
}
exports.default = PartRepository;
