import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementlistComponent } from './departementlist/departementlist.component';
import { EmployeslistComponent } from './employeslist/employeslist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartementDetailsComponent } from './departement-details/departement-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/departements', pathMatch: 'full' },
  { path: 'departements', component: DepartementlistComponent },
  { path: 'departement/:id', component: DepartementDetailsComponent },
  { path: 'employes', component: EmployeslistComponent },
  // {path:'departementDetails',component:DepartementDetailsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const listComponents = [DepartementlistComponent,
   DepartementlistComponent, 
   EmployeslistComponent, 
   PageNotFoundComponent, 
   DepartementDetailsComponent]