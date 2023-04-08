import '../styles/App.css'
import { useState } from "react";
import Triangle from './components/triangles';
import { TextField, Button } from '@mui/material';
// import ButtonProps from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';


function Login({ HandleClick }) {
    const [loginState, setLoginState] = useState(true);
    return (
        < div className="LoginBox">
            <button onClick={HandleClick}>Click Me</button>
            <Triangle size={'Big'} />
            <Triangle size={'Medium'} />
            <div className='login-main'>
                <div className='login-section1'>
                    <div className='heading visible600'>Snap<span className='color_red'>Musix</span></div>
                    <div className='section-row'>
                        <div className='heading'>Vibe to the beats, <span>Snap<span className='color_red'>Musix</span></span></div>

                        <div className='heading-mini' style={{ zIndex: '-1' }}><span className='color_white'>Boost your Mood</span> with the SnapMusix web app. Whatever be the occassion, we are here to provide youu the optimal music. Fasten your seat belts for all the ear candies you're gonna recieve.
                        </div>
                        <div className='heading-small'>Login to start vibing</div>
                    </div>
                </div>
                <div className='login-section2'>
                    <div className={loginState ? 'flip-card' : 'flip-card active'}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className='container-face'>
                                    <div className='heading'>Login</div>
                                    <CssTextField id="outlined-basic" label="Username" variant="outlined" sx={{ input: { color: 'white' }, width: '75%' }} />
                                    <CssTextField id="outlined-basic" type='password' label="Password" variant="outlined" sx={{ input: { color: 'white' }, width: '75%' }} />
                                    <ColorButton variant="outlined" color='error' >Login</ColorButton>
                                    <div className='heading-micro'>Don't have an account?<span className='sign' onClick={() => setLoginState(!loginState)}> SIGN UP</span></div>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <div className='container-face'>
                                    <div className='heading'>Sign Up</div>
                                    <CssTextField id="outlined-basic" label="Username" variant="outlined" sx={{ input: { color: 'white' }, width: '75%' }} />
                                    <CssTextField id="outlined-basic" label="E-Mail" variant="outlined" sx={{ input: { color: 'white' }, width: '75%' }} />
                                    <CssTextField id="outlined-basic" type='password' label="Password" variant="outlined" sx={{ input: { color: 'white' }, width: '75%' }} />
                                    <ColorButton variant="outlined" color='error' >Sign Up</ColorButton>
                                    <div className='heading-micro'>Already have an account?<span className='sign' onClick={() => setLoginState(!loginState)}> SIGN IN</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    );
}

export default Login

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'grey',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
    "& .MuiFormLabel-root": {
        color: 'white'
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: 'white'
    }
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
        backgroundColor: red[800],
    },
}));

