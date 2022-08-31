import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { VersionModule } from './version/version.module';
import { TrustedComponent } from './trusted/trusted.component';
import { DownloadComponent } from './download/download.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    AdvantagesComponent,
    TrustedComponent,
    DownloadComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
