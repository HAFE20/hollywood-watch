import { useState } from 'react';
import Header from './search/Header'
import CardGrid from './movieGrid/CardGrid'
import Overlay from './addMovie/Overlay'
import { Movie } from './models/Movie'
import { filterMovies } from './helperFunctions'
import './App.css';

// Exempel mockup:
// https://codepen.io/david-zocom/pen/ExXGOXd?editors=1100


const data: Movie[] = [
	{
		id: '123', title: 'Jungle cat', premiere: 1960, imgSrc: 'jungle-cat.jpg'
	},
	{
		id: '124', title: 'Two mugs from Brooklyn', premiere: 1942, imgSrc: 'two-mugs-from-brooklyn.jpg'
	},
	{
		id: '125', title: 'Case of the Red Monkey', premiere: 1955, imgSrc: 'case-of-the-red-monkey.jpg'
	},
	{
		id: '126', title: 'Stop Me Before I Kill!', premiere: 1960, imgSrc: 'stop-me-before-i-kill.jpg'
	},
	{
		id: '127', title: 'The End of the Line', premiere: 1957, imgSrc: 'the-end-of-the-line.jpg'
	},
	{
		id: '128', title: 'Night of the Bloody Apes; Feast of Flesh', premiere: 1969, imgSrc: 'night-of-the-bloody-apes.jpg'
	},
	{
		id: '129', title: 'Savage!', premiere: 1962, imgSrc: 'savage!.jpg'
	},
	{
		id: '130', title: 'Underworld, U.S.A.', premiere: 1961, imgSrc: 'underworld-usa.jpg'
	}
]

const App = () => {
	const [movies/*, setMovies*/] = useState<Movie[]>(data)
	const [showAddMovieOverlay, setShowAddMovieOverlay] = useState<boolean>(true)  // ändra till false när vi testat klart

	// searchString kommer att ändras av Header-komponenten, men användas här
	const [searchString, setSearchString] = useState<string>('')

	const filteredMovies: Movie[] = filterMovies(movies, searchString)

	const addMovie = (movie: Movie) => {
		// TODO: anropa setMovies
		console.log('App.addMovie anropad med movie=', movie)
	}

	let addMovieOverlay = null
	if( showAddMovieOverlay ) {
		const closeOverlay = () => setShowAddMovieOverlay(false)
		addMovieOverlay = <Overlay close={closeOverlay} addMovie={addMovie} />
		// JSX översätts till funktionsanrop: _jsx('h1', 'content')
	}

	const showOverlay = () => {
		// visa overlay
		setShowAddMovieOverlay(true)
	}


	return (
	<>
		<Header search={searchString}
			updateSearch={setSearchString}
			addMovie={showOverlay} />

		<CardGrid filteredMovies={filteredMovies} />

		{addMovieOverlay}
	</>
)};



export default App;
