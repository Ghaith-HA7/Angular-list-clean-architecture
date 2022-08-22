import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, Observable, Subject, takeUntil } from 'rxjs';
import { movieConfig } from 'src/app/config/movie';
import { MovieList, MoviesDetails } from 'src/app/core/entity';
import { AdvancedSearchService } from 'src/app/core/services/advance-search/advance-search.service';
import { MovieService } from 'src/app/core/services/movie/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  isLoading: boolean = false;
  movieList!: Observable<MovieList>;
  count: number = 0;
  movieResults!: MoviesDetails[];
  movieListLength: number = 0;
  private _unsubscribeAll: Subject<any>;
  constructor(
    private readonly movieService: MovieService,
    private readonly advancedSearchService: AdvancedSearchService,
    public router: Router,
  ) {
    this._unsubscribeAll = new Subject();
  }
  
  ngOnInit(): void {
    this.advancedSearchService.searchText
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(searchText => {
      if(searchText && searchText !== ''){
        this.getAllMovies(searchText);
      }
      if(!searchText){
        this.getAllMovies();
      }
    });
  }
  getAllMovies(searchText?: string): void {
    this.isLoading = true;
    this.movieList = combineLatest([this.movieService.getAllMovies(searchText)])
    .pipe(
      map(([movies]) => {
        this.count = movies.total_results;
        this.movieListLength = movies.results.length;
        this.movieResults = movies.results;
        this.isLoading = false
        return movies;
      })
    );
  }
  setImagePath(path: string): string {
    return movieConfig.IMAGE_SERVER_PATH + path;
  }

  viewMovieDetails(id: any): void {
    this.router.navigate([ 'movie/' + id + '/details' ], { state: { id } });
  }
  
  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
