import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { authorRegex, titleRegex} from 'src/lib/validators/validator.properties';

@Component({
	selector: 'lm-create-parts',
	templateUrl: './create-parts.component.html',
	styleUrls: ['./create-parts.component.scss']
})
export class CreatePartsComponent implements OnInit {
	public partForm = this.fb.group({
		title: ['', [Validators.required, Validators.pattern(titleRegex)]],
		author: ['', [Validators.required, Validators.pattern(authorRegex)]],
		brand: ['', [Validators.required]]
	});

	constructor(private readonly fb: FormBuilder) {}

	ngOnInit(): void {}
}
