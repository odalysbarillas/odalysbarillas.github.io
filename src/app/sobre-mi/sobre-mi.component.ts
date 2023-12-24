import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {

ngOnInit(): void {
  AppComponent.animaciones();
}

}
