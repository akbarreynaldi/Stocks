import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionLiteComponent } from './version-lite/version-lite.component';
import { VersionProComponent } from './version-pro/version-pro.component';
import { RouterModule } from '@angular/router';
import { VersionRoutingModule } from './version-routing.module';



@NgModule({
  declarations: [
    VersionLiteComponent,
    VersionProComponent
  ],
  imports: [
    CommonModule,
    VersionRoutingModule,
    RouterModule
  ],
  exports: [
    VersionLiteComponent,
    VersionProComponent
  ]
})
export class VersionModule { }
