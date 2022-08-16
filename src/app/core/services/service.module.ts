import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieServicesRepository} from '../repository';
import { MovieService } from './movie/movie.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: MovieServicesRepository, useClass: MovieService},
  ]
})
export class ServiceModule {
}
