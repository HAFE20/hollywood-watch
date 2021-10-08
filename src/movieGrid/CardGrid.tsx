import Card from './Card'
import { Movie } from '../models/Movie'

interface CardGridProps {
	filteredMovies: Movie[];
}

const CardGrid = ({ filteredMovies }: CardGridProps) => (
	<main className="card-grid">
		{filteredMovies.map(movieObject => (
			<Card movie={movieObject} key={movieObject.id} />
		))}
	</main>
)

export default CardGrid
