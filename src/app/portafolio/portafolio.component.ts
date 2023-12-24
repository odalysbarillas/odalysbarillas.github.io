import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {

  categorias: any = [];
  proyectos: any = [];

  constructor(
    private dataService: DataService
  ) { }

  async ngOnInit() {
    await this.getCategorias();
    await this.getProyectos();
    AppComponent.animaciones();
  }

  async getCategorias(){
    this.categorias = await this.dataService.getCategorias();
  }

  async getProyectos(){
    this.proyectos = await this.dataService.getProyectos();    
  }

}
