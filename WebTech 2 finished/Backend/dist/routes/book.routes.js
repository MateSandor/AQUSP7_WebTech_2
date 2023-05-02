"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const express_1 = __importDefault(require("express"));
const validator_properties_1 = require("../lib/validators/validator.properties");
const valid_input_middleware_1 = __importDefault(require("../middlewares/valid-input.middleware"));
const request_validator_1 = __importDefault(require("../lib/validators/request.validator"));
const controller = new book_controller_1.default();
const router = express_1.default.Router();
exports.bookRoutes = router;
router.get('/', controller.getBooks);
router.get('/:id', controller.getBookById);
router.post('/', validator_properties_1.bookPostProperties.map((property) => request_validator_1.default.notEmptyValidator(property)), request_validator_1.default.nameValidate('author'), request_validator_1.default.isbnValidate(), request_validator_1.default.titleValidate(), valid_input_middleware_1.default.CheckEmptyMiddlewares, controller.postBook);
router.put('/:id', validator_properties_1.bookPutProperties.map((property) => request_validator_1.default.notEmptyValidator(property)), request_validator_1.default.titleValidate(), request_validator_1.default.isbnValidate(), request_validator_1.default.nameValidate('author'), valid_input_middleware_1.default.CheckEmptyMiddlewares, controller.updateBook);
router.delete('/:id', controller.deleteBook);
