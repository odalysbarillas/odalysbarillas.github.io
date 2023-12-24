import { Routes } from '@angular/router';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ResumenComponent } from './resumen/resumen.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectoComponent } from './portafolio/proyecto/proyecto.component';

export const routes: Routes = [
    {
        path: 'sobre-mi', component: SobreMiComponent
    },
    {
        path: 'historial', component: ResumenComponent
    },
    {
        path: 'portafolio', component: PortafolioComponent
    },
    {
        path: 'contacto', component: ContactoComponent
    },
    {
        path: 'portafolio/:slug',component: ProyectoComponent
    },
    {
        path: '', redirectTo: 'sobre-mi', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: 'sobre-mi', pathMatch: 'full'
    }
];
