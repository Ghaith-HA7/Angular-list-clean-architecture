import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceSearchModule } from '../advanceSearch/advanced-search.module';

const routes: Routes = [
  {
    path: 'movie/list',
    component: MovieListComponent,
  },
  {
    path: 'movie/:id/details',
    component: MovieDetailsComponent,
  }
];
@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    AdvanceSearchModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MovieListComponent,
    MovieDetailsComponent,
    LayoutComponent,
  ],
  providers: [
  ]
})
export class PresentationModule {
}
