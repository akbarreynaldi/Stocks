import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';
import { ModulesComponent } from './modules/modules.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
  },
  {
    path: 'module-1',
    component: ModulesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
