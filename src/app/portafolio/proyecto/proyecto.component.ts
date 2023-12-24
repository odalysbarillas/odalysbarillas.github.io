import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { ScriptsService } from '../../services/scripts.service';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent {

  @Input() slug: any = '';

  proyecto: any;
  proyectos: any = []

  constructor(
    private router: Router,
    private dataService: DataService,
    private scriptsService: ScriptsService
    ) {
  }

  async ngOnInit() {
    await this.getProyectos();
    this.scriptsService.animaciones();
  }

  async getProyectos(){
    this.proyectos = await this.dataService.getProyectos();
    this.proyecto = this.proyectos.find((p: any) => p.slug == this.slug);

    if (!this.proyecto) {
      this.router.navigate(['portafolio']);
    }
  }

}
