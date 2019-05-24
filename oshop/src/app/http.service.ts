import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

    getPets() {
      return this._http.get("/pets");        
      }

    addPet(data) {
      return this._http.post('/pets/', data);
    }

    getProducts(category) {
      return this._http.get('/inventory/' + category)        
    }

    getProduct(id) {
      return this._http.get('/inventory/product/' + id);
    }

    getPet(id) {
      return this._http.get('/pets/' + id);
    }

    adoptPet(id) {
      return this._http.delete('/pets/' + id);
    }
    
    updatePet(id, data) {
      return this._http.put('/pets/' + id, data);
    }

    likePet(id) {
      return this._http.get('/pets/like/' + id);
    }

    getit(name) {
      return this._http.get('/pets/name/' + name);
    }
        }
 