import React, { useState, useContext } from 'react';
import { UserContext } from './Home';

const CreatePlayDate = () => {
    let message;
    let place;
    let meetUpDate;
    let playdateusers;

    
    const [localState, setLocalState] =  useState({
        successMessage:false,
        errorMessage:false
    });
    
    const [userState, setUserState] = useContext(UserContext);

    const createDate = () => {
        let formData = {
            message : message.value,
            place: place.value,
            meetUpDate: meetUpDate.value,
            playdateusers:userState.userInfo.token

        }
        fetch(
            //URL
            'http://localhost:5000/playdates',
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
            //show success message
            setLocalState({
                ...localState,
                successMessage:true,
                errorMessage:false
            })

            
        })
          .catch(err => console.log('err',err) ) // change the state of the component  
    }

    return (
        <div className="CreatePlayDate">
            <div className="container">

                {
                    localState.errorMessage &&
                    <div className="alert alert-danger">
                        Something went wrong please check.
                    </div>
                }
                {    
                    localState.successMessage && 
                    <div className="alert alert-success">
                        Congratulation! You've been successfully a playdate.
                    </div>
                }

                <label className="">Message</label>
                <input ref={comp => message = comp} type="text" className="form-control" />
                
                <label className="">Place</label>
                <input ref={comp => place = comp} type="text" className="form-control" />
                
                <label className="">Meet Up Date</label>
                <input ref={comp => meetUpDate = comp} type="text" className="form-control" />
                
                <button onClick= {createDate} className="btn btn-primary">Create</button>    
                <button className="btn btn-danger">Cancel</button>
                
                

            </div>
        </div>
    )    

}
export default CreatePlayDate;