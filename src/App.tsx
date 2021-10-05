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
