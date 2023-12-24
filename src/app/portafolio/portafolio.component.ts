import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { ScriptsService } from '../services/scripts.service';

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
    private scriptsService: ScriptsService,
    private dataService: DataService
  ) { 
  }

  async ngOnInit() {
    await this.getCategorias();
    await this.getProyectos();
    this.scriptsService.animaciones();
  }

  async getCategorias(){
    this.categorias = await this.dataService.getCategorias();
  }

  async getProyectos(){
    this.proyectos = await this.dataService.getProyectos();    
  }

}
