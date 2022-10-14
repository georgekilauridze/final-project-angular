import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  url: string = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&fbclid=IwAR2Ze9B0_hTFm0gZSvYWaXKUKHe7JTTlutdFhl0EhZ9UDzz3QHvlxF5VtqQ'
  getAllInfo() {
    return this.http.get(this.url).pipe(map((response: any)=>{
      return response
    }))
  }
}

