import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { VersionModule } from './version/version.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./version/version.module').then(() => VersionModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
