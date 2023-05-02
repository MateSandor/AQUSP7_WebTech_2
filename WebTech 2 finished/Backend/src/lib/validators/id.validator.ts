import mongoose from 'mongoose';

export const getValidId = (id: string) => {
	const validId = new mongoose.Types.ObjectId(id);
	try {
		return validId;
	} catch (error) {
		return '';
	}
};
