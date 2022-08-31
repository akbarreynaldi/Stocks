import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ExploreComponent } from './explore/explore.component';
import { ModulesComponent } from './modules/modules.component';
import { ArticleRoutingModule } from './article-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ArticleComponent,
    ExploreComponent,
    ModulesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ArticleRoutingModule,
  ],
  exports: [
    ArticleComponent,
    ExploreComponent,
    ModulesComponent
]
})
export class ArticleModule { }
