"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
    lastFilmRating = prompt("На сколько оцениваете его?", ""),
    lastFilm2 = prompt("Один из последних просмотренных фильмов?", ""),
    lastFilmRating2 = prompt("На сколько оцениваете его?", "");

    personaMovieDB.movies[lastFilm] = lastFilmRating
    personaMovieDB.movies[lastFilm2] = lastFilmRating2

console.log(personaMovieDB.count, personaMovieDB.movies)

// // if block if block if block  if block if block if block
// if (4 == 9) {
//     console.log("Ok!")
// } else {
//     console.log("not Ok!")
// }

// const num = 50

// if (num < 49) {
//     console.log("not Ok!")
// } else if (num > 100) {
//     console.log("not Ok!")
// } else {
//     console.log("Ok!")
// }

// (num === 50) ? console.log("Ok!") : console.log("not Ok!")

// switch (num) {
//     case 49:
//         console.log("not right!");
//         break;
//     case 50:
//         console.log("Ok!")
//         break;
//     default:
//         console.log("Ok!")
//         break;
// }