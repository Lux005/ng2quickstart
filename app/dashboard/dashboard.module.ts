import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { HomeModule } from './home/home.module';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        HomeModule
        ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule { }
