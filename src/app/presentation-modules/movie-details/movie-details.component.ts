import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieConfig } from 'src/app/config/movie';
import { MovieList } from 'src/app/core/entity';
import { MovieService } from 'src/app/core/services/movie/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  isLoading: boolean = false;
  movieId: any = 0;
  movieDetails: MovieList = {
    adult: false,
    backdrop_path: '',
    id: 0,
    original_language: '',
    original_title: '',
    poster_path: '',
    release_date: '',
    title: '',
    vote_average: '',
    budget: 0,
    revenue: 0,
    status: '',
    tagline: '',
    overview: ''
  };
  
  constructor(
    private route: ActivatedRoute,
    private readonly movieService: MovieService,
  ) {
      this.movieId = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : 0;  
    }
    ngOnInit() {
      this.getMovieDetails();
    }
    getMovieDetails(): void {
      this.movieService.getMovieDetails(this.movieId).subscribe((data: any)=> {
        this.movieDetails = data;
      });
    }
    setImagePath(path: string): string {
      return movieConfig.IMAGE_SERVER_PATH + path;
    }
}
