import React ,{ useState , useContext, createContext } from 'react';
import { Route, Link } from 'react-router-dom';
import SignUpLoginButton from './SignUpLoginButton';
import SignUpWindow from './SignUpWindow';
import LoginWindow from './LoginWindow';
import { UserContext } from './Home';

export const AppContext = createContext(); // This will create AppContext component


const NavBar = () => {

    const [ state, setState ] = useState({ signUpForm:false, loginForm:false });

    const [ userState, setUserState ] = useContext(UserContext);


      return(
        <AppContext.Provider value={[ state, setState ]}>
          <div className="NavBar navbar navbar-light bg-light static-top">
            <div className="container nav-links">
              <Link className="logo" to="/"><h2>Logo</h2></Link>
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="/about">About</Link>
              { /*  <Link className="link" to="/ideas">Ideas</Link>
              <Link className="link" to="/blog">Blog</Link>
              <Link className="link" to="/contact">Contact</Link>
        */ } 
              <SignUpLoginButton />
            </div>
            


            {state.signUpForm && <SignUpWindow />}
            {state.loginForm && <LoginWindow />}

          </div>
        </ AppContext.Provider>
    )
  }

export default NavBar;