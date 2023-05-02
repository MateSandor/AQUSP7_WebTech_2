import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Config from './config/Config';
import { partRoutes } from './routes/part.routes';
import Logging from './lib/logging';
import RequestLogMiddleware from './middlewares/requests.log.middleware';

const startServer = () => {
	const app: Application = express();
	app.use(express.json());
	app.use(cors({ origin: '*' }));
	//app.use(express.static('public'));
	app.use(RequestLogMiddleware.logMiddleware);
	app.use('/api/parts', partRoutes);

	Logging.info('Mongo connection is active...');
	app.listen(Config.SERVER_PORT, () => Logging.success(`Server started at ${new Date()}`));
};

const serverErrorHandler = () => {
	Logging.error('MongoDB connection is fail!');
};

mongoose.connect(Config.MONGOOSE_CONNECTION_STRING).then(startServer).catch(serverErrorHandler);
