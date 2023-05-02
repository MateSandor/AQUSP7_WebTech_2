import mongoose from 'mongoose';
import { Part } from '../part.model';

const partSchema = new mongoose.Schema<Part>(
	{
		title: { type: String, required: true },
		author: { type: String, required: true },
		brand: {type: String, required: true}
	},
	{
		versionKey: false
	}
);

export const PartSchema = mongoose.model('Parts', partSchema);
