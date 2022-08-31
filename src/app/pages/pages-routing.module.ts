import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleModule } from './article/article.module';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(() => HomeModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then(() => ArticleModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
