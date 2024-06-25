import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfilComponent } from './profil/profil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: "accueil",
        component: AccueilComponent
    },
    {
        path: 'profil',
        component: ProfilComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
