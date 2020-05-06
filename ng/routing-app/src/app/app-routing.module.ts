import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';


const routes: Routes = [
  {path: 'first-component', component: FirstComponent, children: [
    {path: 'child-a', component: ChildAComponent},
    {path: 'child-b', component: ChildBComponent},
  ]},
  {path: 'second-component', component: SecondComponent},
  {path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)},
  {path: '', redirectTo: '/first-component', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
