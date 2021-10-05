
interface HeaderProps {
	// State-variabel från App-komponenten
	search: string;

	// set-funktion som kan uppdatera search
	updateSearch: (newSearch: string) => void
}
const Header = ({ search, updateSearch }: HeaderProps) => (
	<header>
		<h1> Hollywood watch </h1>
		<input type="text"
			value={search}
			onChange={event => updateSearch(event.target.value)}
			/>
		<span className="magnify-search">🔍</span>
	</header>
)

export default Header
