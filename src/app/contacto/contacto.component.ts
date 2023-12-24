import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  correo: string = 'odalysbarillas46@gmail.com';
  nombre: string = 'Odalys';

}
