import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Register {
  constructor(private http: HttpClient) {}

  public postUser(datos: any) {
    //const url = 'http://localhost:3000/user';
    const url = '/user';

    console.log(datos);
    return this.http.post(url, datos);
  }
}
