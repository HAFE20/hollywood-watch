import { Movie } from './models/Movie'

function filterMovies(movies: Movie[], searchString: string) {
	return movies.filter(movie => {
	   if( searchString === '' ) {
		   // Visa alla filmer
		   return true
	   } else {
		   // Visa alla filmer som matchar söksträngen
		   const title = movie.title.toLowerCase()
		   const search = searchString.toLowerCase()

		   // Leta i hela strängen
		   // return title.includes(search)

		   // Leta från början
		   return title.startsWith(search)
	   }
   })
}

export { filterMovies }
