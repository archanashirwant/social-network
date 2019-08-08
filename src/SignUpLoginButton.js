import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import CreatePlayDate from './CreatePlayDate';
import { AppContext } from './App';
import { UserContext } from './App';

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

    const openBeMemberModal = () => {
        setState({ 
            ...state, 
            beMemberForm:true
        });
      
    }

    return (
        <UserContext.Consumer>   
            {   
                (user) => ( 
                    <> 
                        {
                            (user[0].userInfo != null) ?
                                <>
                                    <li><Link className="nav-link" to="/user">User</Link></li>
                                    <Button clickFunction={logoutUser} className="link">Logout</Button>
                                </>   
                                    :
                                    <li><Link className="nav-link" to="/user" onClick={openBeMemberModal}>Login</Link></li>
                               
                        }                                
                    </>  
                )
            }            
        </UserContext.Consumer>    

    )
  }

  export default SignUpLoginButton;
  

  