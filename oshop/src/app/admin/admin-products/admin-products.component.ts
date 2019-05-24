// import { Component, OnInit } from '@angular/core';
// import { HttpService } from 'src/app/http.service';

// @Component({
//   selector: 'app-admin-products',
//   templateUrl: './admin-products.component.html',
//   styleUrls: ['./admin-products.component.css']
// })
// export class AdminProductsComponent implements OnInit {
//   categories;
//   products;
//   category;

//   constructor(private _http: HttpService) {
//     _http.getCategories()
//       .subscribe(results => this.categories = results);
//    }

//   getProducts(category) {
//     console.log(category);
//     this.category = category;
//     this._http.getProducts(category)
//       .subscribe(results => this.products = results);  }
//   ngOnInit() {
//   }

// }
