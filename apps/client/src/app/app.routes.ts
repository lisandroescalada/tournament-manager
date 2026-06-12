import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('./modules/home/home-module').then((m) => m.HomeModule),
    },
    {
        path: 'tournaments',
        loadChildren: () =>
            import('./features/tournaments/presentation/tournaments-module').then((m) => m.TournamentsModule),
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
]
