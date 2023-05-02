import { Part } from '../models/part.model';

export const toPart = (part: any): Part | null => {
	if (!part) {
		return null;
	}
	return {
		id: part._id,
		title: part.title,
		author: part.author,
		brand: part.brand,
	};
};




