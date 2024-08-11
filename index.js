const person = {
    name: "Yusuf",
    age: 18,
    city: "Kuwait City",
}
person.email = "alnasiriyusuf@gmail.com"

function hasKey(obj, key){
    return !!obj[key]
}
console.log(hasKey(person, "age"))
/////////////////
const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
];
function getMovies(movies) {
    movies.forEach(movie => {
        console.log(movie.title)
    });
}
function getMoviesNumBeforeYear(movies ,year = 1994){
    let num = 0
    movies.forEach(movie=>movie.year <= year ? num+=1 : null)
    return num
}

function changeMovieGenre(movies, movieTitle = "thE dArk kniGHt", changeTo = "Action/Drama"){
    movies.map(movie=>{
       if(movie.title.toLowerCase() == movieTitle.toLowerCase()){
        movie.genre = changeTo
       }
       return movie
    })
    // algo master 😎
}
// changeMovieGenre(movies)

function groupMoviesByGenre(movies){
    const genres = {}
    movies.forEach(movie=>{
        if(!genres[movie.genre]){
            genres[movie.genre] = []
        }
        genres[movie.genre].push(movie.title)
    })
    
    return genres
}
console.log(groupMoviesByGenre(movies))
