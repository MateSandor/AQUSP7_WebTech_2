import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartsComponent } from './components/parts/parts.component';

const routes: Routes = [
	{
		path: 'parts',
		component: PartsComponent,
		data: { show: true, name: 'Parts' }
	},
	{ path: '**', redirectTo: 'parts', data: { show: false, name: '' } }
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}