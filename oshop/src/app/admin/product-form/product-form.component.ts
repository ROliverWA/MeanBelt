// import { HttpService } from './../../http.service';
// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-product-form',
//   templateUrl: './product-form.component.html',
//   styleUrls: ['./product-form.component.css']
// })
// export class ProductFormComponent{
//   categories;
//   product;
//   category =  ""

//   constructor(private _dbQuery: HttpService, private router: Router, private route: ActivatedRoute) { 
    
//     let reqUser = this.route.snapshot.paramMap.get('id');    
//     if (reqUser) {
//       this._dbQuery.getProduct(reqUser)
//         .subscribe(results => {this.product = results; } )  }
//     // this._dbQuery.getCategories()
//     //   .subscribe(results => this.categories = results);      
//   }

//   // addProduct(data) {
//   //   this._dbQuery.addProduct(data)
//   //     .subscribe(results => console.log(results));
//   //     this.router.navigate(['/admin/products']);
//   }



  

// }
