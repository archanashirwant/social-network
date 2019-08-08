import React ,{ useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import SignUpLoginButton from './SignUpLoginButton';
import SignUpWindow from './SignUpWindow';
import LoginWindow from './LoginWindow';
import { UserContext , AppContext } from './App';

//export const AppContext = createContext(); // This will create AppContext component


const NavBar = () => {

//    const [ state, setState ] = useState({ signUpForm:false, loginForm:false });
    const [ state, setState ] = useContext(AppContext);
    const [ userState, setUserState ] = useContext(UserContext);


      return(
       
          
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">
              <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
            </a>
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
              <SignUpLoginButton />
            </ul>
              
          </nav>
          
          

       
    )
  }

export default NavBar;