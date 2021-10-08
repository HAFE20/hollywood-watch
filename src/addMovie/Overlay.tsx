import './Overlay.css'

interface OverlayProps {
	close: () => void
}

const Overlay = ({ close }: OverlayProps) => (
	<div className="overlay">
		overlay!
		<div className="dialog">
		Här lägger man till ett nytt movie card
		<br />
		<button onClick={close}> Close </button>
		</div>
	</div>
)

export default Overlay
