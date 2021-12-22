"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    alert(numberOfFilms);
    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "")
    }
}
start();

const personaMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
            lastFilmRating = prompt("На сколько оцениваете его?", "");
        if (lastFilm !== null && 
            lastFilmRating !== null && 
            lastFilm !== "" && 
            lastFilmRating !== "" && 
            lastFilm.length < 50) {
            personaMovieDB.movies[lastFilm] = lastFilmRating;
            alert("done");
        } else {
            alert("error");
            i--;
        }
    }
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personaMovieDB.count < 10) {
        alert("Мало кино")
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
        alert("Классический зритель")
    } else if (personaMovieDB.count > 30) {
        alert("Вы киноман")
    } else {
        alert("error")
    }
}
// detectPersonalLevel();

function swowMyDB() {
    if (!personaMovieDB.privat) {
        console.log(personaMovieDB)
    }
}
swowMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personaMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`, "")
    }
}
// writeYourGenres();



console.log(personaMovieDB.count, typeof (personaMovieDB.count), personaMovieDB.movies)