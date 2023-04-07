import '../styles/App.css'
import bg from '../assets/background2.png'

function homepage({ HandleClick }) {
    return (
        < div className="HomeBox" style={{ backgroundImage: `url(${bg})` }}>
            <button onClick={HandleClick}>Click Me</button>

        </div >
    );
}

export default homepage