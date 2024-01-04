import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  mi_correo: string = 'odalysbarillas46@gmail.com';
  correo: string = '';
  nombre: string = '';
  asunto: string = '';
  descripcion: string = '';

}
