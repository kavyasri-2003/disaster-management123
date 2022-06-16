import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TsunamiComponent } from './tsunami/tsunami.component';
import { FloodsComponent } from './floods/floods.component';
import { EarthquakeComponent } from './earthquake/earthquake.component';
import { TornadoeComponent } from './tornadoe/tornadoe.component';
import { CycloneComponent } from './cyclone/cyclone.component';

import { HomeComponent } from './home/home.component';
const routes: Routes = [
{path:'home/cyclone',component:CycloneComponent},
{path:'home/tornadoe',component:TornadoeComponent},
{path:'home/earthquake',component:EarthquakeComponent},
{path:'home/floods',component:FloodsComponent},
{path:'home/tsunami',component:TsunamiComponent},
{path:'home',component:HomeComponent},
{path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
