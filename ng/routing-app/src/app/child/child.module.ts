import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildShellComponent } from './child-shell/child-shell.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ChildShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', pathMatch: 'full', component: ChildShellComponent}])
  ],
  entryComponents: [ChildShellComponent]
})
export class ChildModule { }
