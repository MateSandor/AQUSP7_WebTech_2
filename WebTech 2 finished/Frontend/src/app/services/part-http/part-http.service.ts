import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Part, UpdatePart } from 'src/app/model/part.model';
import { PostPart } from '../../model/part.model';

@Injectable({
	providedIn: 'root'
})
export class PartHttpService {
	private BOOKS_API_URL: string = 'http://localhost:5501/api/parts/';

	constructor(private http: HttpClient) {}

	public getAllParts(): Observable<Part[]> {
		return this.http.get<Part[]>(this.BOOKS_API_URL);
	}

	public deletePart(id: string): Observable<any> {
		const url = `${this.BOOKS_API_URL}${id}`;
		return this.http.delete<any>(url);
	}

	public createPart(part: PostPart): Observable<PostPart> {
		const url = `${this.BOOKS_API_URL}`;
		return this.http.post<PostPart>(url, part);
	}

	public updatePart(id: string, part: UpdatePart): Observable<any> {
		const url = `${this.BOOKS_API_URL}${id}`;
		console.log(url);

		return this.http.put(url, part);
	}
}
