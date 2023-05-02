import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { titleRegex, authorRegex } from '../../../../lib/validators/validator.properties';

@Component({
	selector: 'app-update-parts',
	templateUrl: './update-parts.component.html',
	styleUrls: ['./update-parts.component.scss']
})
export class UpdatePartsComponent implements OnInit {
	constructor(private readonly fb: FormBuilder) {}

	public partForm = this.fb.group({
		title: ['', [Validators.required, Validators.pattern(titleRegex)]],
		author: ['', [Validators.required, Validators.pattern(authorRegex)]],
		brand: ['',[Validators.required]]
	});

	public get title(): AbstractControl<any, any> | null {
		return this.partForm.get('title');
	}

	public get author(): AbstractControl<any, any> | null {
		return this.partForm.get('author');
	}

	public get brand(): AbstractControl<any, any> | null {
		return this.partForm.get('brand');
	}
	public get TitleIsValid(): boolean {
		if (this.title?.errors) return this.title.errors['pattern'];
		return false;
	}

	public get AuthorIsValid(): boolean {
		if (this.author?.errors) return this.author.errors['pattern'];
		return false;
	}

	public get BrandIsValid(): boolean {
		if (this.brand?.errors) return this.brand.errors['pattern'];
		return false;
	}
	ngOnInit(): void {}
}
