import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Login {
  constructor(private http: HttpClient) {}

 public  enviarDatos(email: string, pass: string) {
    const datos = {
      email: email,
      pass: pass
    }
    const url = '/login';
    console.log(datos);
    return this.http.post(url, datos);
  }
}
