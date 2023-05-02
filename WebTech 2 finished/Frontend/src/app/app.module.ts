import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PartsComponent } from './components/parts/parts.component';
// import { RentsComponent } from './components/rents/rents.component';
// import { RentersComponent } from './components/renters/renters.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SearcbarComponent } from './components/searcbar/searcbar.component';
// import { CreateRentsComponent } from './components/rents/create-rents/create-rents.component';
// import { CreatePartsComponent } from './components/parts/create-parts/create-parts.component';
// import { CreateRenterComponent } from './components/renters/create-renter/create-renter.component';
// import { UpdatePartsComponent } from './components/parts/update-parts/update-parts.component';
// import { UpdateRenterComponent } from './components/renters/update-renter/update-renter.component';
// import { UpdateRentsComponent } from './components/rents/update-rents/update-rents.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CreatePartsComponent } from './components/parts/create-parts/create-parts.component';
import { UpdatePartsComponent } from './components/parts/update-parts/update-parts.component';

registerLocaleData(en);

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		PartsComponent,
		// RentsComponent,
		// RentersComponent,
		// CreateRentsComponent,
		SearcbarComponent,
		CreatePartsComponent,
		// CreateRenterComponent,
		UpdatePartsComponent,
		// UpdateRenterComponent,
		// UpdateRentsComponent
	],
	providers: [{ provide: NZ_I18N, useValue: en_US }],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		FormsModule,
		BrowserAnimationsModule,
		NzModalModule,
		NzDatePickerModule,
		NzSelectModule,
		NzGridModule,
		NzInputModule,
		NzTableModule,
		NzSpinModule
	]
})
export class AppModule {}
