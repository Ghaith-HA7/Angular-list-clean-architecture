import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./presentation-modules/layout/layout.component";
import { MovieDetailsComponent } from "./presentation-modules/movie-details/movie-details.component";
import { MovieListComponent } from "./presentation-modules/movie-list/movie-list.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        { useHash: true, onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})


export class AppRoutingModule { }