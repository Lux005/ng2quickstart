import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { NotFoundModule } from './notfound/notfound.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		AppRoutingModule,
		NotFoundModule,
		HomeModule,
    	LoginModule,
		DashboardModule
	],
	declarations: [AppComponent],
	providers: [{provide: APP_BASE_HREF, useValue : '/' }],
	bootstrap: [AppComponent]

})

export class AppModule { }
