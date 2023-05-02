import { HydratedDocument } from 'mongoose';
import { toPart } from '../lib/mapping';
import { Part, PostPart, UpdatePart } from '../models/part.model';
import { PartSchema } from '../models/schemas/part.model.schema';

export default class PartRepository {
	public async getAllPart(): Promise<(Part | null)[]> {
		const partList: HydratedDocument<Part>[] = await PartSchema.find();
		return partList.map(toPart);
	}

	public async getPartById(id: string): Promise<Part | null> {
		const part: HydratedDocument<Part> | null = await PartSchema.findById(id);
		if (part === null) {
			throw new Error('not found');
		}
		return toPart(part);
	}

	public async postPart(newpart: PostPart): Promise<Part | null> {
		const part: HydratedDocument<Part | null> = await PartSchema.create(newpart);
		return toPart(part);
	}

	public async updatePart(id: string, part: UpdatePart): Promise<Part | null> {
		return await PartSchema.findById(id).then((searchedPart) => {
			if (searchedPart) {
				searchedPart.set(part);
				searchedPart.save();
				return toPart(searchedPart);
			}
			throw new Error('not found');
		});
	}

	public async deletePart(id: string): Promise<string | null> {
		const deletedPart = await PartSchema.findByIdAndDelete(id);

		if (deletedPart) {
			return id;
		}
		throw new Error('not found');
	}
}
