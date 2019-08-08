import React, { useState,useContext,useEffect } from 'react';
import { Card, Button, Nav } from 'react-bootstrap';
import { UserContext } from './App';



const EditProfile = () => {
    return (
        <div className="MyProfile">
            
            { 
           

           <Card className="text-center" style={{ width: '20rem' }}>
               <Card.Header as="h5">titile</Card.Header>
           <Card.Img variant="top" src="http://placehold.it/150X150" className="img-fluid rounded-circle"/>
           <Card.Body>
             <Card.Title> Email</Card.Title>
             
             
           
             
           </Card.Body>
          
         </Card>
                 
  }

        </div>
              
      )
        
}

export default EditProfile;