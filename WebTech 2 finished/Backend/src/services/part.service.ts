import { Part, PostPart, UpdatePart } from '../models/part.model';
import PartRepository from '../repos/part.repository';

export default class PartService {
	private repository = new PartRepository();

	public async readAllPart(): Promise<(Part | null)[]> {
		return this.repository.getAllPart();
	}

	public async readPartById(id: string): Promise<Part | null> {
		return this.repository.getPartById(id);
	}

	public async createPart(newPart: PostPart): Promise<Part | null> {
		return this.repository.postPart(newPart);
	}

	public async modifyPart(id: string, part: UpdatePart): Promise<Part | null> {
		return this.repository.updatePart(id, part);
	}

	public async removePart(id: string): Promise<string | null> {
		return this.repository.deletePart(id);
	}
}
