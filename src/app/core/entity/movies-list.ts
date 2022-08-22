export interface MoviesDetails {
    adult: boolean,
    backdrop_path: string,
    id: Number,
    original_language: string,
    original_title: string,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: string,
    budget: Number,
    revenue: Number,
    status: string,
    tagline: string,
    overview: string,
}
export class MovieList {
    constructor(
        public results: MoviesDetails[],
        public total_results: number,
        public total_pages: number,
        public page: 1,
    ) {
    }
}
