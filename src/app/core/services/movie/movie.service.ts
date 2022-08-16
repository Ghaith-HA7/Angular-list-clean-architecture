import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { movieConfig } from 'src/app/config/movie';
import { MovieList } from 'src/app/core/entity';
import { MovieServicesRepository } from 'src/app/core/repository';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends MovieServicesRepository {
  
  private movieList!: Observable<MovieList[]>;
  private movieDetails!: Observable<MovieList[]>;
  count$!: Observable<number>;
  movieList$!: Observable<MovieList[]>;
  _unsubscribeAll: Subject<any> = new Subject();
  
  constructor(
    private httpClient: HttpClient
  ){
    super();
  }
  
  public getAllMovies(searchText: string = '', size: Number = 20, skip: Number = 0): Observable<MovieList[]> {
    try {
      if(searchText !== ''){
        return this.httpClient.get<MovieList[]>(
          `${movieConfig.SEARCH}&query=${searchText}`
        );
      }
      else {
        return this.httpClient.get<MovieList[]>(
          `${movieConfig.DICOVER}`
        );
      }
      
      
    } catch(err) {
      console.log("error: ", err);
      return this.movieList;
    }
  }
  

  public getMovieDetails(movieId: number): Observable<MovieList[]>{
    try {
      return this.httpClient.get<MovieList[]>(
        `${movieConfig.DETAILS}/${movieId}?api_key=${movieConfig.API}`
      );
      
    } catch(err) {
      console.log("error: ", err);
      return this.movieDetails
    }
  };
}
