import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule
  ],
  declarations: [
    HomeComponent
  ]
})

export class AdminLayoutModule {}
