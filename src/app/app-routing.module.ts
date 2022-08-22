import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieDetailsComponent } from "./modules/movie-details/movie-details.component";
import { MovieListComponent } from "./modules/movie-list/movie-list.component";

const routes: Routes = [
    {
        path: 'movie',
        loadChildren: () => import('./modules/presentation.module').then((m) => m.PresentationModule),
    },
    { path: '', pathMatch: 'full', redirectTo: 'movie' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,{
            useHash: true, 
            relativeLinkResolution: 'legacy',
            onSameUrlNavigation: 'reload' 
        }),
    ],
    exports: [RouterModule]
})


export class AppRoutingModule { }