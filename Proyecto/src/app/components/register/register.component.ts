import { Component } from '@angular/core';
import { Register } from 'src/app/sevices/register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name!: string;
  apellido!: string;
  email!: string ;
  pass!: string ;

  constructor(private register: Register,private router: Router) {}



  crearUsuario() {
    const datosUsuario = {
      name: this.name,
      apellido: this.apellido,
      email: this.email,
      pass: this.pass
    };

    this.register.postUser(datosUsuario).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al realizar la solicitud POST', error);
        // Realiza las acciones necesarias en caso de error
      }
    );
  }
}
