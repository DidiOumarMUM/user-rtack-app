import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDirective } from './home.directive';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule , HttpModule , FormsModule ,HomeRoutingModule
  ],
  declarations: [HomeComponent, HomeDirective] ,
  exports: []
})
export class HomeModule { }
