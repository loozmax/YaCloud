import fetch from "node-fetch";
import { Movie } from "./model";

interface TmdbMovie {
    id: number,
    title: string,
}


function prepareMovie(tmdbMovie: TmdbMovie): Movie {
    return {
        id: tmdbMovie.id,
        title: tmdbMovie.title,
    };
}

export const getMovieFromStorage = async (id: number): Promise<Movie> => {
    const tmdbMovies: TmdbMovie[] = await (await fetch("https://storage.yandexcloud.net/movies-app/tmdb.json")).json() as TmdbMovie[];
    const movie = prepareMovie(tmdbMovies.filter(movie => movie.id = id)[0]);

    return movie;;
}