import { Movie } from '../models/Movie'

// CardProps beskriver hela komponentens "props"
interface CardProps {
	movie: Movie
}
// Alternativ: ({ movie: { id, imgSrc, title, premiere} }: CardProps
const Card = ({ movie }: CardProps) => (
	<section className="card">
		<div className="image">
			<img src={'./assets/' + movie.imgSrc} alt="Movie poster" />
		</div>
		<h3> {movie.title} </h3>
		<p> {movie.premiere} </p>
	</section>
)

export default Card
