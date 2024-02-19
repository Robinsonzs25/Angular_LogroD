import { Routes } from '@angular/router';
import { TipoComponent } from './tipo/tipo.component';
import { PersonaComponent } from './persona/persona.component';

export const routes: Routes = [
    {path: 'tipo', component: TipoComponent},
    {path: 'persona', component: PersonaComponent}
];
