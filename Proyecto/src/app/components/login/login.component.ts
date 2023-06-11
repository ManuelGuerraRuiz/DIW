import { Component } from '@angular/core';
import {Login} from 'src/app/sevices/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  pass!: string;

  constructor(private login: Login, private router: Router) { }

  submitForm() {
    if (this.email && this.pass) {
      this.login.enviarDatos(this.email, this.pass)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/inicio']);
          },
          error => {
            console.error(error);
          }
        );
    } else {
      // Campos incompletos, mostrar una alerta o realizar alguna acción
      console.log('Por favor, complete todos los campos');
    }
  }

}
