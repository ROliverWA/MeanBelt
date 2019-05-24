import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';



@Component({
  selector: 'app-home',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent {
  pet;
  Results: boolean = false;

  names: string = "";
  types: string = "";
  descs: string = "";
  skill1s: string = "";
  skill2s: string = "";
  skill3s: string = "";
  constructor(private _http: HttpService, private route: ActivatedRoute, private router: Router) {
    let reqPet = this.route.snapshot.paramMap.get('id');
    console.log(reqPet);
    if (reqPet) {
      this._http.getPet(reqPet)
      .subscribe(results => {this.pet=results; this.names=this.pet.name; this.types=this.pet.type, this.descs = this.pet.desc, this.skill1s = this.pet.skills[0].name, this.skill2s = this.pet.skills[1].name,this.skill3s = this.pet.skills[2].name});
      this.Results = true;
      
      
    }  
}

saveChanges(data) {
// console.log(data)
  this._http.updatePet(this.pet._id, data)
  .subscribe(results => console.log(results));
  this.router.navigate(['/']);
}




}