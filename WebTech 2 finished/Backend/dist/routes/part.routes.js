"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.partRoutes = void 0;
const part_controller_1 = __importDefault(require("../controllers/part.controller"));
const express_1 = __importDefault(require("express"));
const validator_properties_1 = require("../lib/validators/validator.properties");
const valid_input_middleware_1 = __importDefault(require("../middlewares/valid-input.middleware"));
const request_validator_1 = __importDefault(require("../lib/validators/request.validator"));
const controller = new part_controller_1.default();
const router = express_1.default.Router();
exports.partRoutes = router;
router.get('/', controller.getParts);
router.get('/:id', controller.getPartById);
router.post('/', validator_properties_1.partPostProperties.map((property) => request_validator_1.default.notEmptyValidator(property)), request_validator_1.default.nameValidate('author'), request_validator_1.default.titleValidate(), valid_input_middleware_1.default.CheckEmptyMiddlewares, controller.postPart);
router.put('/:id', validator_properties_1.partPutProperties.map((property) => request_validator_1.default.notEmptyValidator(property)), request_validator_1.default.titleValidate(), request_validator_1.default.nameValidate('author'), valid_input_middleware_1.default.CheckEmptyMiddlewares, controller.updatePart);
router.delete('/:id', controller.deletePart);
