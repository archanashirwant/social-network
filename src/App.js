import React , { useState, createContext } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import MyProfile from './MyProfile';
import PrivateRoute from './PrivateRoute';
import LoginWindow from './LoginWindow';
import UserNavigation from './UserNavigation';
/*import Blog from './Blog';
import Contact from './Contact';
*/
import './App.css';
import NavBar from './NavBar';
import BeMember from './BeMember';

export const UserContext = createContext(); // This will create AuthContext component

export const AppContext = createContext(); // This will create AppContext component

const App = () => {
    
    let userInfo =  JSON.parse(localStorage.getItem("authUser"));
    
  
 // localStorage.getItem('authUser');
 const [ state, setState ] = useState({ beMemberForm:false });

  const [ userState, setUserState ] = useState( {userInfo} ); 

    return (
      <AppContext.Provider value={[ state, setState ]}>
        <UserContext.Provider value={[ userState, setUserState ]}>
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path ="/" exact component={Home} />            
                <Route path ="/about" component={About} />
                <Route path ="/login"  component={BeMember} />
                <PrivateRoute  path="/user" component={UserNavigation} /> 
               {/* <PrivateRoute  path="/myprofile" component={MyProfile} />      
                <PrivateRoute  path="/createplaydate" component={CreatePlayDate} />       
                <PrivateRoute  path="/createplaydate" component={CreatePlayDate} />            
                 <Route path ="/ideas" component={Ideas} />            
                <Route path ="/blog" component={Blog} />            
    <Route path ="/contact" component={Contact} />    */ }
            </Switch>    
        </BrowserRouter>
        </UserContext.Provider>
        </AppContext.Provider>
        
    )
}

export default App;


/*

const App = () => {
    let userInfo =  JSON.parse(localStorage.getItem("authUser"));
    
  
 // localStorage.getItem('authUser');

    const [ userState, setUserState ] = useState( {userInfo} );
    const [ state, setState ] = useState({ signUpForm:false, loginForm:false });
    
      return (
      <Router>
          <div>
            <h2>Welcome to React Router Tutorial</h2>
            <AppContext.Provider value={[ state, setState ]}>
                <>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link"> Home </Link></li>
                    <li><Link to={'/about'} className="nav-link">About</Link></li>
                    <li><Link to={'/createplaydate'} className="nav-link"></Link></li>
                    <SignUpLoginButton />
                    </ul>
                    </nav>
                    {state.signUpForm && <SignUpWindow />}
                    {state.loginForm && <LoginWindow />}
                </>
            </AppContext.Provider>
            <hr />
            <UserContext.Provider value={[ userState, setUserState ]}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <PrivateRoute  path="/createplaydate" component={CreatePlayDate} />            
            </Switch>
            </UserContext.Provider>            
          </div>
        </Router>
      );
    }
  

  export default App;
*/

