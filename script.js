const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {},
    genres: [],
    privat: false,
};


for(let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцените его?');
    if(a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
    } else{
        i--;
    }
}

// personalMovieDB.movies[a] = b;1`
console.log(personalMovieDB);