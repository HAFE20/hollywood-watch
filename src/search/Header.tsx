
interface HeaderProps {
	// State-variabel från App-komponenten
	search: string;

	// set-funktion som kan uppdatera search
	updateSearch: (newSearch: string) => void;

	// anropas när användaren klickar på "add"
	addMovie: () => void;
}
const Header = ({ search, updateSearch, addMovie }: HeaderProps) => (
	<header>
		<h1> Hollywood watch </h1>
		<button className="add-movie-button"
			onClick={addMovie}> Add movie </button>
		<input type="text"
			value={search}
			onChange={event => updateSearch(event.target.value)}
			/>
		<span className="magnify-search">🔍</span>
	</header>
)

export default Header
