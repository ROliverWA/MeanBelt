import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent {
 check:any = "";
   constructor(private _http: HttpService, private router: Router) { }

  AddPet(data) {
    console.log(data)
    this._http.getit(data['name']).
    subscribe(results => { this.check = results;
    console.log("got it" + this.check.name);

    if (this.check != ""){
      return false;
    }
    else {
    this._http.getPet
    this._http.addPet(data)
      .subscribe(results => console.log(results));
      this.router.navigate(['/']);}
  })}
  
 
}
