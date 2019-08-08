import React, { useState,useContext,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Nav } from 'react-bootstrap';
import { UserContext } from './App';

import PrivateRoute from './PrivateRoute';

const MyProfile = ( {match} ) => {

    const [user,setUser] = useState({});
    const [userState, setUserState] = useContext(UserContext);
console.log('my profile',userState);
    useEffect(() => {
        fetch(
            //URL
        'http://localhost:5000/users/',
            //Data
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'AUTHORIZATION': `Bearer ${userState.userInfo.token}`
                }
            }
        ).then(res => { 
            if (res.ok) {
                return res.json();

            } else {     

                throw new Error('Something went wrong ...');
            }
        })
        .then(user => { setUser(user);console.log(user); })
        .catch(err => console.log('err',err) ) // change the state of the component  
    },[]);

      return (
        <div className="MyProfile">
            
         { 
           <Card className="text-center" style={{ width: '20rem' }}>
               <Card.Header as="h5">{user.name}</Card.Header>
           <Card.Img variant="top" src="http://placehold.it/150X150" className="img-fluid rounded-circle"/>
           <Card.Body>
             <Card.Title> {user.email}</Card.Title>
             <Card.Subtitle className="mb-2 text-muted"> Born On: {user.dob}</Card.Subtitle>
             <Card.Subtitle className="mb-2 text-muted"> Gender: {user.gender}</Card.Subtitle>

             <Link to={`/user/editprofile`} className="nav-link">Edit</Link>
           </Card.Body>
           <Card.Footer className="text-muted">{user.datecreated}</Card.Footer>
         </Card>
                         
        }
        </div>
              
      )   
}

export default MyProfile;