import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import PartService from '../services/part.service';

export default class CheckMiddlewares {
	private static readonly partService = new PartService();

	public static CheckEmptyMiddlewares = (req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	};

	public static CheckPartIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
		this.partService
			.readPartById(req.body.part)
			.then(() => {
				next();
			})
			.catch(() => res.status(400).json({ message: 'Invalid part!' }));
	};

}
