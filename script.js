let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// Функция записывающая ответы пользователя в объект personalMovieDB.movies

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?'),
            b = prompt('На сколько оцените его?');
        if(a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
        } else{
            i--;
        }
    }
}

rememberMyFilms();

// Функция проверяющая свойство privat

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// Функция спришивающая о жанрах

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`"Ваш любимый жанр под номером ${i}"`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();

/*
    Функция обозначающая в каком ранге пользователь
    по количеству просмотренных фильмов
*/

function detectPersonalLevel() {
    if (personalMovieDB < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

console.log(personalMovieDB);