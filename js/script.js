"use strict";

const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {        
        personaMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        alert(personaMovieDB.count);
        while (personaMovieDB.count === '' || personaMovieDB.count === null || isNaN(personaMovieDB.count)) {
            personaMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personaMovieDB.count < 10) {
            alert("Мало кино")
        } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
            alert("Классический зритель")
        } else if (personaMovieDB.count > 30) {
            alert("Вы киноман")
        } else {
            alert("error")
        }
    },
    swowMyDB: function() {
        if (!personaMovieDB.privat) {
            console.log(personaMovieDB)
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            personaMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`, "")
        }
        personaMovieDB.genres.forEach((item, i) => {
            console.log(`Much love № ${i + 1} - it's a ${item}`)
        });
    },
    // toggleVisibleMyDB: function() {
    //     this.privat = !this.privat        
    // }
    toggleVisibleMyDB: function() {
        if (personaMovieDB.privat) {
            personaMovieDB.privat = false
        } else {
            personaMovieDB.privat = true
        }    
    }
};

console.log(personaMovieDB.privat);
personaMovieDB.toggleVisibleMyDB();
console.log(personaMovieDB.privat);




function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script)
}

loadScript("js/test.js");
loadScript("js/some.js");