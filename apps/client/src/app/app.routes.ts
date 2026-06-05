import { Routes } from '@angular/router';
import { HomeModule } from '@modules/home/home-module';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./modules/home/home-module').then((m): typeof HomeModule => m.HomeModule),
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
