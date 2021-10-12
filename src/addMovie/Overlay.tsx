import { useState } from 'react'
import './Overlay.css'
import { Movie } from '../models/Movie'

interface OverlayProps {
	close: () => void;
	addMovie: (movie: Movie) => void;
}

const Overlay = ({ close, addMovie }: OverlayProps) => {
	const [title, setTitle] = useState<string>('')

	const handleAddMovie = () => {
		// förbered Movie-objekt och anropa addMovie-funktionen
		let movie: Movie = {
			// Hämta riktiga värden från formuläret
			id: '', title: title, premiere: 0, imgSrc: ''
		}
		addMovie(movie)
		close()
	}
	return (
		<div className="overlay">
			<div className="dialog">
			<input type="text" placeholder="Movie title"
				value={title}
				onChange={e => setTitle(e.target.value)} />
			<input type="text" placeholder="Poster URL" />
			<input type="number" placeholder="Premiere year" />
			<div>
				<button onClick={handleAddMovie}> Add movie </button>
				<button onClick={close}> Cancel </button>
			</div>
			</div>
		</div>
	)
}

export default Overlay
