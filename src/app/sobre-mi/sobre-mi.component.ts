import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ScriptsService } from '../services/scripts.service';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {

  constructor(
    private scriptsService: ScriptsService
  ) { }

  ngOnInit(): void {
    this.scriptsService.animaciones();
  }

}
