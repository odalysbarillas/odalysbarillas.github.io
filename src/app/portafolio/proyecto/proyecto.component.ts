import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent {

  slug: any;
  proyecto: any;
  proyectos: any = []

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
    ) {
  }

  async ngOnInit() {
    await this.getProyectos();
    AppComponent.animaciones();
  }

  async getProyectos() {
    this.proyectos = await this.dataService.getProyectos();
    this.slug = this.activeRoute.snapshot.paramMap.get('slug');
    this.proyecto = this.proyectos.find((p: any) => p.slug == this.slug);

    if (!this.proyecto) {
      this.router.navigate(['portafolio']);
    }
  }

}
