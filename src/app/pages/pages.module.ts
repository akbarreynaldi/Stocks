import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TargetComponent } from './about/target/target.component';

@NgModule({
  declarations: [
    AboutComponent,
    TargetComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [AboutComponent]
})
export class PagesModule { }
