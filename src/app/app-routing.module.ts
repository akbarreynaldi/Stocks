import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesModule} from "./pages/pages.module";
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(() => PagesModule)
  },
  {
    path: "",
    redirectTo: '/pages/home/lite',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
