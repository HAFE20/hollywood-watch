import { useState } from 'react';
import Header from './search/Header'
import Card from './movieGrid/Card'
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

	// searchString kommer att ändras av Header-komponenten, men användas här
	const [searchString, setSearchString] = useState<string>('')

	const filteredMovies: Movie[] = filterMovies(movies, searchString)

	return (
	<>
		<Header search={searchString}
			updateSearch={setSearchString} />

		<main className="card-grid">
			{filteredMovies.map(movieObject => (
				<Card movie={movieObject} key={movieObject.id} />
			))}
		</main>
	</>
)};



export default App;
