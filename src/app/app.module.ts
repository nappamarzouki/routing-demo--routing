import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DepartementlistComponent } from './departementlist/departementlist.component';
// import { EmployeslistComponent } from './employeslist/employeslist.component';
import { listComponents } from './app-routing.module';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { DepartementDetailsComponent } from './departement-details/departement-details.component';
// import { DepartementListComponent } from './departement-list/departement-list.component';
@NgModule({
  declarations: [
    AppComponent,
    listComponents,
    // PageNotFoundComponent,
    // DepartementDetailsComponent,
    // DepartementListComponent
    // DepartementlistComponent,
    // EmployeslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
