import { Observable } from 'rxjs';
import { MovieList } from '../entity';

export abstract class MovieServicesRepository {
    public abstract getAllMovies(query?: string, size?: Number, skip?: Number): Observable<MovieList[]>;
    public abstract getMovieDetails(movieId: number): Observable<MovieList[]>;
}
