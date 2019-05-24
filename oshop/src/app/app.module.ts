import { HttpService } from './http.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
// import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
// import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { HttpClientModule } from '@angular/common/http';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetEditComponent } from './pet-edit/pet-edit.component'


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    // AdminProductsComponent,
    // AdminOrdersComponent,
    // ProductFormComponent,
    PetFormComponent,
    PetDetailComponent,
    PetEditComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CustomFormsModule,
    FormsModule,    
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'pets/add', component:PetFormComponent},
      {path: 'pets/:id', component:PetDetailComponent},
      {path: 'pets/details/:id', component:PetEditComponent},
      // {path: 'pets/like/:id', component:OrderSuccessComponent},      
      // {path: 'admin/products/new', component:ProductFormComponent},      
      // {path: 'admin/products/:id', component:ProductFormComponent}, 
      // {path: 'admin/products', component:AdminProductsComponent},     
      // {path: 'admin/orders', component:AdminOrdersComponent},
      {path: 'my/orders', component:MyOrdersComponent},

    ])
    
  ],

  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
