import PartController from '../controllers/part.controller';
import express from 'express';
import { partPostProperties, partPutProperties } from '../lib/validators/validator.properties';
import CheckMiddlewares from '../middlewares/valid-input.middleware';
import Validators from '../lib/validators/request.validator';

const controller = new PartController();
const router = express.Router();

router.get('/', controller.getParts);
router.get('/:id', controller.getPartById);
router.post(
	'/',
	partPostProperties.map((property) => Validators.notEmptyValidator(property)),
	Validators.nameValidate('author'),
	Validators.titleValidate(),
	CheckMiddlewares.CheckEmptyMiddlewares,
	controller.postPart
);
router.put(
	'/:id',
	partPutProperties.map((property) => Validators.notEmptyValidator(property)),
	Validators.titleValidate(),
	Validators.nameValidate('author'),
	CheckMiddlewares.CheckEmptyMiddlewares,
	controller.updatePart
);
router.delete('/:id', controller.deletePart);

export { router as partRoutes };
