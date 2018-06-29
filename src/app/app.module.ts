import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './routing';
import { SettingComponent } from './setting/setting.component';
import { DetailComponent } from './detail/detail.component';
import { BriefComponent } from './brief/brief.component';
import { HomeService } from './service/home.service';
import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    DetailComponent,
    BriefComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,HomeRoutingModule ,HomeModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
