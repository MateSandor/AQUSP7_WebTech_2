import PartService from '../services/part.service';
import { Request, Response } from 'express';
import { Part, PostPart, UpdatePart } from '../models/part.model';
import { getValidId } from '../lib/validators/id.validator';

export default class PartController {
	private readonly service = new PartService();

	public readonly getParts = (req: Request, res: Response) => {
		this.service
			.readAllPart()
			.then((parts: (Part | null)[]) => {
				res.status(200).json(parts);
			})
			.catch((error) => {
				res.status(500).json(error);
			});
	};

	public readonly getPartById = (req: Request, res: Response) => {
		try {
			const id = getValidId(req.params.id);
			this.service
				.readPartById(id.toString())
				.then((part: Part | null) => {
					res.status(200).json(part);
				})
				.catch((error: Error) => {
					if (error.message === 'not found') {
						return res.status(404).json({ message: 'not found' });
					}
					return res.status(500).json(error);
				});
		} catch (error) {
			res.status(400).json({ message: 'bad request' });
		}
	};

	public readonly postPart = (req: Request, res: Response) => {
		const newPart: PostPart = {
			title: req.body.title,
			author: req.body.author,
			brand: req.body.brand
		};

		this.service
			.createPart(newPart)
			.then((part: Part | null) => {
				res.status(201).json(part);
			})
			.catch((error) => {
				res.status(500).json(error);
			});
	};

	public readonly updatePart = (req: Request, res: Response) => {
		try {
			const id = getValidId(req.params.id);
			const updates: UpdatePart = {
				title: req.body.title,
				author: req.body.author,
				brand: req.body.brand
			};

			this.service
				.modifyPart(id.toString(), updates)
				.then((part: Part | null) => {
					res.status(200).json(part);
				})
				.catch((error: Error) => {
					if (error.message === 'not found') {
						return res.status(404).json(error);
					}
					return res.status(500).json(error);
				});
		} catch (error) {
			res.status(400).json({ message: 'bad request' });
		}
	};

	public readonly deletePart = (req: Request, res: Response) => {
		try {
			const id = getValidId(req.params.id);

			this.service
				.removePart(id.toString())
				.then((id) => {
					res.status(200).json({ deletedId: id });
				})
				.catch((error: Error) => {
					if (error.message === 'not found') {
						return res.status(404).json(error);
					}
					return res.status(500).json(error);
				});
		} catch (error) {
			res.status(400).json({ message: 'bad request' });
		}
	};
}
