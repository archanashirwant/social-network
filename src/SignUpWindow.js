import React, { useState, useContext } from 'react';
import { AppContext } from './App';
import { UserContext } from './App';

const SignUpWindow = () => {
    let name;
    let email;
    let password;
    let gender;
    let dob;
    let profilepic;

    
    const [localState, setLocalState] =  useState({
        selectedFile:null,
        successMessage:false,
        errorMessage:false
    });
    
    const [state, setState] =  useContext(AppContext);

    const [userState, setUserState] = useContext(UserContext);

    const registerUser = () => {

        
     /*   let myForm = document.getElementById('myForm');
let formData = new FormData(myForm);
//const formData = new FormData();
        formData.append('name', name.value)
        formData.append('password',password.value);
        formData.append('gender', gender.value);
        formData.append('email',email.value);
        formData.append('dob',dob.value);
        formData.append('file', profilepic.files[0]);
*/

        let formData = {
            name : name.value,
            password: password.value,
            gender: gender.value,
            email: email.value,
            dob:dob.value,
            profilepic:profilepic.files[0].name

        }
        
        console.log(formData);
        fetch(
            //URL
            'http://localhost:5000/auth/register',
            //Data
            {
                method: 'POST',
                body:JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
                
            }
        ).then(res => {
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

             closeSignUp()
        })
          .catch(err => console.log('err',err) ) // change the state of the component  
    }

    const closeSignUp = () => {
        setState({ ...state, beMemberForm:false });
    }

    const selectFile=event=>{

        setLocalState({
            ...localState,
            selectedFile:event.target.files[0]
        })

    }

    return (

        <div className="container">

            <label className="">Name</label>
            <input ref={comp => name = comp} type="text" className="form-control" name="name" />
            
            <label className="">Password</label>
            <input ref={comp => password = comp} type="password" className="form-control" password="password"/>
            
            <label className="">Email</label>
            <input ref={comp => email = comp} type="text" className="form-control" email="email"/>
            
            <label className="">Gender</label>
            <input ref={comp => gender = comp} type="text" className="form-control" gender="gender" />

            <label className="">Date of Birth</label>
            <input ref={comp => dob = comp} type="text" className="form-control" name="dob"/>

            <label className="">Profile  picture</label>
            <input ref={(comp) => { profilepic = comp; }} className="form-control"  type="file" name="profilepic"/>
        
            <hr />
            
            <button  onClick={registerUser} className="btn btn-primary">Register</button>    
            <button onClick= {closeSignUp} className="btn btn-danger">Cancel</button>
            
            {
                localState.errorMessage &&
                <div className="alert alert-danger">
                    Email already exists.
                </div>
            }
            {    
                localState.successMessage && 
                <div className="alert alert-success">
                    Congratulation! You've been successfully signed up.
                    Create Playdate now.
                </div>
            }

        </div>

    )    

}
export default SignUpWindow;