"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// for (let i = 0; i < 2; i++) {
//     let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
//     lastFilmRating = prompt("На сколько оцениваете его?", "");

//     if (lastFilm !== null && lastFilmRating !== null && lastFilm !== "" && lastFilmRating !== "" && lastFilm < 50) {
//         personaMovieDB.movies[lastFilm] = lastFilmRating 
//         alert("done")
//     } else {
//         alert("error");
//         i--;
//     }    
// }


if (personaMovieDB.count < 10) {
    alert("Мало кино")
} else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
    alert("Классический зритель")
} else if (personaMovieDB.count > 30) {
    alert("Вы киноман")
} else {
    alert("error")
}

console.log(personaMovieDB.count, personaMovieDB.movies)
