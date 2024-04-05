import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-departement-details',
  templateUrl: './departement-details.component.html',
  styleUrls: ['./departement-details.component.css']
})
export class DepartementDetailsComponent implements OnInit{
public departementID : number  | undefined;
  private _activateRoute: any;

constructor (private_activateRoute : ActivatedRoute){}
ngOnInit(): void {
  this._activateRoute.ParamMap.subscribe((params :ParamMap)=>{
    this.departementID=Number(params.get('id'));
  })
}
}
 