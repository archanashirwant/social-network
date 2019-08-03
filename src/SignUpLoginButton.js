import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import CreatePlayDate from './CreatePlayDate';
import { AppContext } from './NavBar';
import { UserContext } from './Home';

/*
    use <AppContext.Consumer>  if inside JSX
    use useContext if outside JSX
*/ 

const SignUpLoginButton =(prop) => {
    
    //useContext will give you values from context
    const [state, setState] = useContext(AppContext);

    const [userState, setUserState] = useContext(UserContext);
console.log(userState);
    const openSignUpWindow = () => {
        setState({ 
            ...state, 
            loginForm:false, 
            signUpForm:true 
        });
    }

    const openLoginWindow = () => {
        setState({ 
            ...state, 
            signUpForm:false, 
            loginForm:true 
        });
      
    }

    const logoutUser  = () => {
        setUserState({})
        localStorage.clear();
    }

    return (
     /* Use  <AppContext.Consumer> only if we are going to use values from context in the JSX
      <AppContext.Consumer>
        { 
            (value)=><Button clickFunction={openWindow} className="link">{value[0].label}</Button>
        }
      </AppContext.Consumer>
    */

                    <UserContext.Consumer>   
                        {   
                            (user) => 
                                ( 
                                    <> {console.log('SignupLoginWIndow',user[0].userInfo)}
                                        
                                        {
                                             (user[0].userInfo != null) ?
                                                <Button clickFunction={logoutUser} className="link">Logout</Button>
                                                    :
                                                <Button clickFunction={openLoginWindow} className="link">Login</Button>
                                        }
                                        {
                                             (user[0].userInfo != null) ?
                                                <Link className="link" to="/playdate">Create Play Date</Link>
                                                   :
                                                <Button clickFunction={openSignUpWindow} className="link">Sign Up</Button>
                                            
                                        }
                                                
                                    </>  
                                )
                        }            
                    </UserContext.Consumer>    

    )
  }

  export default SignUpLoginButton;
  

  