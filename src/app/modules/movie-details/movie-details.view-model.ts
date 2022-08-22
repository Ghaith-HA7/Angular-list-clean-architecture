import { MoviesDetails} from '../../core/entity';

export class MovieDetailsViewModel {
  public movieDetails: MoviesDetails = {
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
}
