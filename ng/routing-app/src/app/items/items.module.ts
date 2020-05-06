import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { Route } from '@angular/compiler/src/core';
import { Routes, Router, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component : ItemsComponent,
    children: [
      {
        path: 'child', loadChildren: () => import('../child/child.module').then(m => m.ChildModule)
      }
    ]
  }
];

@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ItemsComponent]
})
export class ItemsModule { }
