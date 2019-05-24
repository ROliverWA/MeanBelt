import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pets;
  results: boolean = false;
  constructor(private _http: HttpService) {
    _http.getPets()
    .subscribe(results => {this.pets = results; this.results = true;});
    
   }


}





