import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { deleteMovieById, getMovieById, saveMovie, updateMovie } from './crud';
import { Movie } from './model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public movieData: Movie;

    readonly testForm: FormGroup = new FormGroup({
        readMovie: new FormControl(''),
        addMovie: new FormControl(''),
        newMovie: new FormControl(''),
        updateMovie: new FormControl(''),
        idMovie: new FormControl(''),
    });

    public createMovie(title: string): void {
        const movie: Movie = {
            id: parseInt((Math.random() * (1000 - 1) + 1).toString()),
            title
        };

        saveMovie(movie).then(() => {
            console.log('success');
        });
    }

    public deleteMovie(id: string): void {
        deleteMovieById(parseInt(id)).then(() => {
            console.log('success');
        });
    }

    public readMovie(id: string): void {
        getMovieById(parseInt(id)).then((movie) => {
            this.movieData = movie;
        });
    }

    public updateMovie(id: string, title: string): void {
        updateMovie(parseInt(id), title).then(() => {
            console.log('success');
        });
    }
}


