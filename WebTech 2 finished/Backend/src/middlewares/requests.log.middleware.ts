import { NextFunction, Request, Response } from 'express';
import Logging from '../lib/logging';
import axios from 'axios';
import https from 'https';

const httpsAgent = new https.Agent({ rejectUnauthorized: false });
const axiosInstance = axios.create({ httpsAgent });

export default class RequestLogMiddleware {
	public static logMiddleware = async (req: Request, res: Response, next: NextFunction) => {
		Logging.info(`[${req.method}] ${req.url} at ${new Date()}`);


		next();
	};
}
