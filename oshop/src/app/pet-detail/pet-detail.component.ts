import { ActivatedRoute, Router } from '@angular/router';
import { Component, Output } from '@angular/core';
import { HttpService } from 'src/app/http.service';



@Component({
  selector: 'app-home',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent {
  pet;
  Results: boolean = false;
  skills: [];
  id = "";
  @Output() liked: boolean = false;
  constructor(private _http: HttpService, private route: ActivatedRoute, private router: Router) {
    let reqPet = this.route.snapshot.paramMap.get('id');
    console.log(reqPet);
    if (reqPet) {
      this._http.getPet(reqPet)
      .subscribe(results => this.pet=results);
      this.Results = true;
      
      
    }  
}

AdoptMe() {
     this._http.adoptPet(this.pet._id)
     .subscribe(results => console.log(results));
     this.router.navigate(['/']);
}

LikeMe() {

    this._http.likePet(this.pet._id)
    .subscribe(results =>{console.log(results['_id']); this.id = results['_id'];
    this.liked = true;    
    })
    console.log(this.id)

    // this.router.navigate(['/pets/' + this.id]);
    
    // this.router.navigateByUrl('/pets/' + this.id);
    this.router.navigate(['/pets/' + this.id]);

}
}
