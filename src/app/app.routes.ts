import { Routes } from '@angular/router';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ResumenComponent } from './resumen/resumen.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectoComponent } from './portafolio/proyecto/proyecto.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'sobre-mi', pathMatch: 'full'
  },
  {
    path: 'sobre-mi', title: 'Sobre Mi', component: SobreMiComponent
  },
  {
    path: 'historial', title: 'Historial', component: ResumenComponent
  },
  {
    path: 'portafolio', title: 'Portafolio', component: PortafolioComponent
  },
  {
    path: 'contacto', title: 'Contacto', component: ContactoComponent
  },
  {
    path: 'portafolio/:slug', title: 'Proyecto', component: ProyectoComponent
  },
  {
    path: '**', redirectTo: 'sobre-mi', pathMatch: 'full'
  }
];
