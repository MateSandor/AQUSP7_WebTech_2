"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renterRoutes = void 0;
const renter_controller_1 = __importDefault(require("../controllers/renter.controller"));
const express_1 = __importDefault(require("express"));
const validator_properties_1 = require("../lib/validators/validator.properties");
const valid_input_middleware_1 = __importDefault(require("../middlewares/valid-input.middleware"));
const request_validator_1 = __importDefault(require("../lib/validators/request.validator"));
const controller = new renter_controller_1.default();
const router = express_1.default.Router();
exports.renterRoutes = router;
router.get('/', controller.getRenters);
router.get('/:id', controller.getRenterById);
router.post('/', validator_properties_1.renterProperties.map((property) => request_validator_1.default.notEmptyValidator(property)), request_validator_1.default.nameValidate('name'), request_validator_1.default.emailValidator(), request_validator_1.default.validBirth(), valid_input_middleware_1.default.CheckEmptyMiddlewares, controller.postRenter);
router.put('/:id', validator_properties_1.renterProperties.map((property) => request_validator_1.default.notEmptyValidator(property)), request_validator_1.default.emailValidator(), request_validator_1.default.nameValidate('name'), request_validator_1.default.validBirth(), valid_input_middleware_1.default.CheckEmptyMiddlewares, controller.updateRenter);
router.delete('/:id', controller.deleteRenter);
