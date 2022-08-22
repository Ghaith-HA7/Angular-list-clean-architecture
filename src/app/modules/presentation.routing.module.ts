import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MovieListComponent } from "./movie-list/movie-list.component";

const routes: Routes = [
    {
      path: 'movie/list',
      component: MovieListComponent,
    },
    {
      path: 'movie/:id/details',
      component: MovieDetailsComponent,
    },
    { path: '', pathMatch: 'full', redirectTo: 'movie/list' },
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})


export class PresentationRoutingModule { }