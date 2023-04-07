import '../styles/App.css'
import bg from '../assets/background.jpg'
import Triangle from './components/triangles';

function Login({ HandleClick }) {
    return (
        < div className="LoginBox">
            <button onClick={HandleClick}>Click Me</button>
            <Triangle size={'Big'} />
            <Triangle size={'Medium'} />
            <div className='login-main'>
                <div className='login-section1 text-3xl font-bold underline text-grey50'>hi</div>
                <div className='login-section2'></div>
            </div>

        </div >
    );
}

export default Login