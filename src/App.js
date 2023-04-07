import './styles/App.css';
import Home from './pages/homepage'
import LoginPage from './pages/login_page'
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(1);
  function HandleClick() {
    loggedIn === 0 ? setLoggedIn(1) : setLoggedIn(0);
  }
  return (
    <div>
      {loggedIn === 0 ? <Home HandleClick={HandleClick} /> : <LoginPage HandleClick={HandleClick} />}
    </div >
  );
}

export default App;
