import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AdvanceSearchModule } from '../advanceSearch/advanced-search.module';
import { PresentationRoutingModule } from './presentation.routing.module';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    AdvanceSearchModule,
    PresentationRoutingModule,
  ],
  exports: [
    MovieListComponent,
    MovieDetailsComponent,
  ],
  providers: [
  ]
})
export class PresentationModule {
}
