import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.less']
})
export class DepartementListComponent {

  departements=[
    {id:1, nom :'Technologie de l\'informatique'},
    {id:1, nom :'Electronique'},
    {id:1, nom :'Mécanique'},
    {id:1, nom :'Gestion'},
  ];
  private _router: any;
constructor(private_router:Router){ }

onSelectDep(departement : any){
  this._router.navigate(['/departement',departement.id])
}

}
