"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const part_service_1 = __importDefault(require("../services/part.service"));
const id_validator_1 = require("../lib/validators/id.validator");
class PartController {
    constructor() {
        this.service = new part_service_1.default();
        this.getParts = (req, res) => {
            this.service
                .readAllPart()
                .then((parts) => {
                res.status(200).json(parts);
            })
                .catch((error) => {
                res.status(500).json(error);
            });
        };
        this.getPartById = (req, res) => {
            try {
                const id = (0, id_validator_1.getValidId)(req.params.id);
                this.service
                    .readPartById(id.toString())
                    .then((part) => {
                    res.status(200).json(part);
                })
                    .catch((error) => {
                    if (error.message === 'not found') {
                        return res.status(404).json({ message: 'not found' });
                    }
                    return res.status(500).json(error);
                });
            }
            catch (error) {
                res.status(400).json({ message: 'bad request' });
            }
        };
        this.postPart = (req, res) => {
            const newPart = {
                title: req.body.title,
                author: req.body.author,
                brand: req.body.brand
            };
            this.service
                .createPart(newPart)
                .then((part) => {
                res.status(201).json(part);
            })
                .catch((error) => {
                res.status(500).json(error);
            });
        };
        this.updatePart = (req, res) => {
            try {
                const id = (0, id_validator_1.getValidId)(req.params.id);
                const updates = {
                    title: req.body.title,
                    author: req.body.author,
                    brand: req.body.brand
                };
                this.service
                    .modifyPart(id.toString(), updates)
                    .then((part) => {
                    res.status(200).json(part);
                })
                    .catch((error) => {
                    if (error.message === 'not found') {
                        return res.status(404).json(error);
                    }
                    return res.status(500).json(error);
                });
            }
            catch (error) {
                res.status(400).json({ message: 'bad request' });
            }
        };
        this.deletePart = (req, res) => {
            try {
                const id = (0, id_validator_1.getValidId)(req.params.id);
                this.service
                    .removePart(id.toString())
                    .then((id) => {
                    res.status(200).json({ deletedId: id });
                })
                    .catch((error) => {
                    if (error.message === 'not found') {
                        return res.status(404).json(error);
                    }
                    return res.status(500).json(error);
                });
            }
            catch (error) {
                res.status(400).json({ message: 'bad request' });
            }
        };
    }
}
exports.default = PartController;
