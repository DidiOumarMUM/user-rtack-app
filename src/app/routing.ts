import { NgModule } from '@angular/core';
import { Routes, RouterModule ,PreloadAllModules  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { DetailComponent } from './detail/detail.component';
import { BriefComponent } from './brief/brief.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
   
  } ,
  {
      path :'setting' , component : SettingComponent ,
      children: [
        { path: '', redirectTo: 'setting', pathMatch: 'full' },
        { path: 'detail', component: DetailComponent },
        { path: 'brief', component: BriefComponent }
      ]

  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,  {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
