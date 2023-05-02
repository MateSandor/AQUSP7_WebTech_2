import { Component, OnInit } from '@angular/core';
import { Part, UpdatePart } from 'src/app/model/part.model';
import { PartHttpService } from 'src/app/services/part-http/part-http.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { PostPart } from '../../model/part.model';
import { CreatePartsComponent } from './create-parts/create-parts.component';
import { UpdatePartsComponent } from './update-parts/update-parts.component';
import { LoadService } from 'src/app/services/load.service';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'lm-parts',
	templateUrl: './parts.component.html',
	styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {
	private _partList: Array<Part> = [];
	private _filteredPartList: Array<Part> = [];

	public get filteredPartList(): Array<Part> {
		return this._filteredPartList;
	}

	public set filteredPartList(value: Array<Part>) {
		this._filteredPartList = value;
	}

	public get partList(): Array<Part> {
		return this._partList;
	}

	public set partList(value: Array<Part>) {
		this._partList = value;
	}

	public listOfColumn = [
		{
			title: 'Title',
			compare: (a: Part, b: Part) => a.title.localeCompare(b.title),
			priority: false
		},
		{
			title: 'Author',
			compare: (a: Part, b: Part) => a.author.localeCompare(b.author),
			priority: 2
		},
		{
			title: 'Brand',
			compare: (a: Part, b: Part) => a.brand.localeCompare(b.brand),
			priority: 2
		}

	];

	constructor(private partHttpService: PartHttpService, private modal: NzModalService, private loadService: LoadService) {
		this.loadService.show();
	}

	public ngOnInit(): void {
		this.refreshParts();
	}

	private refreshParts(): void {
		this.loadService.show();
		setTimeout(() => {
			this.partHttpService.getAllParts().subscribe((parts) => {
				this.partList = [...parts];
				this.filteredPartList = [...parts];
				console.log("This.partList ezalatt:")
				console.log(this.partList);
				this.loadService.hide();
					
				
			});
		}, 1000);
		
	}

	public handleSearchChange(input: string): void {
		this.loadService.show();
		if (input.length >= 3) {
			setTimeout(() => {
				this.filteredPartList = this.partList.filter((part: Part) => {
					this.loadService.hide();
					return part?.title?.toLocaleLowerCase().includes(input.toLocaleLowerCase());
				});
			}, 1000);
		} else {
			this.filteredPartList = this.partList;
			this.loadService.hide();
		}
	}

	public deleteClick(part: Part) {
		this.modal.confirm({
			nzTitle: 'You sure you want to delete this part?',
			nzContent: `<b style="color: red;">Author: ${part.author}<br>Title: ${part.title}<br>Brand: ${part.brand}</b>`,
			nzOkText: 'Yes',
			nzOkType: 'primary',
			nzOkDanger: true,
			nzOnOk: () => this.deletePart(part),
			nzCancelText: 'No',
			nzOnCancel: () => console.log('Cancel')
		});
	}

	public deletePart(part: Part) {
		this.partHttpService.deletePart(part.id).subscribe((response) => {
			console.log(response);
			this.refreshParts();
		});
	}

	public createClick() {
		const ref: NzModalRef = this.modal.info({
			nzTitle: 'Create new part!',
			nzContent: CreatePartsComponent,
			nzOkText: 'Yes',
			nzOkType: 'primary',
			nzOkDanger: true,
			nzOnOk: () => this.createPart(ref.componentInstance.partForm),
			nzCancelText: 'No',
			nzOnCancel: () => console.log('Cancel')
		});
	}

	private createPart(part: FormGroup) {
		if(part.invalid){
			alert("invalid");
			return;
		}
		this.partHttpService.createPart(part.value).subscribe(() => {
			this.refreshParts();
		});
		
		console.log(part);
	}

	public updateClick(part: Part) {
		const ref: NzModalRef = this.modal.info({
			nzTitle: 'Update part!',
			nzContent: UpdatePartsComponent,
			nzOkText: 'Yes',
			nzOkType: 'primary',
			nzOkDanger: true,
			nzOnOk: () => this.updatePart(part.id, ref.componentInstance.partForm),
			nzCancelText: 'No',
			nzOnCancel: () => console.log(ref.componentInstance.partForm.value)
		});

		ref.componentInstance.title.setValue(part.title);
		ref.componentInstance.author.setValue(part.author);
		ref.componentInstance.brand.setValue(part.brand)
	}

	private updatePart(id: string, part: FormGroup) {
		if(part.invalid){
			alert("invalid");
			return;
		}
		console.log(`${id} többi: ${JSON.stringify(part.value)}`);
		this.partHttpService.updatePart(id, part.value).subscribe(() => {
			this.refreshParts();
		});
	}
}
