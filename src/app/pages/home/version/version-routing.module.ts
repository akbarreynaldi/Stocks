import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VersionLiteComponent } from './version-lite/version-lite.component';
import { VersionProComponent } from './version-pro/version-pro.component';


const routes: Routes = [
  {
    path: 'lite',
    component: VersionLiteComponent
  },
  {
    path: 'pro',
    component: VersionProComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VersionRoutingModule { }
