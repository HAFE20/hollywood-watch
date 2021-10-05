import { useState } from 'react';
import { Movie } from './models/Movie'
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

	return (
	<>
		<header>
			<h1> Hollywood watch </h1>
			<input type="text" />
			<span className="magnify-search">🔍</span>
		</header>

		<main className="card-grid">
			{movies.map(movie => (
				<section key={movie.id} className="card">
					<div className="image">
						<img src={'./assets/' + movie.imgSrc} alt="Movie poster" />
					</div>
					<h3> {movie.title} </h3>
					<p> {movie.premiere} </p>
				</section>
			))}
		</main>
	</>
)};


export default App;
