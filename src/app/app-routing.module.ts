import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeslistComponent } from './employeslist/employeslist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartementDetailsComponent } from './departement-details/departement-details.component';
import { DepartementListComponent } from './departement-list/departement-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/departements', pathMatch: 'full' },
  { path: 'departementlist', component: DepartementListComponent },
  { path: 'departement/:id', component: DepartementDetailsComponent },
  { path: 'employeslist', component: EmployeslistComponent },
 
 
  // {path:'departementDetails',component:DepartementDetailsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const listComponents = [DepartementListComponent, EmployeslistComponent,
     
   PageNotFoundComponent, 
   DepartementDetailsComponent]