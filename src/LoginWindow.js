import React, { useState, useContext } from 'react';
import { AppContext } from './NavBar';
import { UserContext } from './Home';

const LoginWindow = () => {
    
    let email;
    let password;
    
    const [localState, setLocalState] =  useState({
        successMessage:false,
        errorMessage:false
    });

    const [state, setState] =  useContext(AppContext);

    const [userState, setUserState] = useContext(UserContext);

    const loginUser = () => {        

        let formData = {
            password: password.value,
            email: email.value

        }
        fetch(
            //URL
            'http://localhost:5000/auth/login',
            //Data
            {
                method: 'POST',
                body:JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
                
            }
        )
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
            setLocalState({
                ...localState,
                successMessage:false,
                errorMessage:true
            })

                throw new Error('Something went wrong ...');
            }
        })
        .then(result => {
        
            let userInfo = JSON.stringify(result);            
            localStorage.setItem('authUser', userInfo);

            //show success message
            setLocalState({
                ...localState,
                successMessage:true,
                errorMessage:false
            })

            setUserState({
                ...userState,
                userInfo
             })

             closeLogin()
        })
          .catch(err => console.log('err',err) ) // change the state of the component  
          
    }

    const closeLogin = () => {
        setState({ loginForm:false });
    }
    

    return (
        <div className="LoginWindow" style={{overlay: {zIndex: 3}}}>
            <div className="container">
                
                <label className="">Email</label>
                <input ref={comp => email = comp} type="text" className="form-control" />
                
                <label className="">Password</label>
                <input ref={comp => password = comp} type="password" className="form-control" />
           
                <button onClick= {loginUser} className="btn btn-primary">Login</button>
                <button  onClick= {closeLogin} className="btn btn-danger" >Cancel</button> 
            
                {
                    localState.errorMessage &&
                    <div className="alert alert-danger">
                        Invalid email / passoword.Try again.
                    </div>
                }

                    

            </div>
        </div>
    )    

}
export default LoginWindow;