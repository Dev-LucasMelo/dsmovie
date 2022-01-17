const Movie = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

export default MoviePage = {
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}