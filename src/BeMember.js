import React, { useState, useContext } from 'react';
import { Tabs, Tab, Modal } from 'react-bootstrap';
import LoginWindow from './LoginWindow';
import SignUpWindow from './SignUpWindow';
import { AppContext } from './App';


const BeMember = (props) => {

    const [state, setState] =  useContext(AppContext);
console.log(state);
    const closeModal = () => {
        if (typeof props.location !== 'undefined') 
            props.location.state.showForm = false;            
            setState({ beMemberForm:false });
             
    
    }

    return (
        <>
        <Modal show={state.beMemberForm} onHide={closeModal} >
        <Modal.Header closeButton>
        <Modal.Title>Be a Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Tabs defaultActiveKey="login"   >
            <Tab eventKey="login" title="Login">
                <LoginWindow />
            </Tab>
            <Tab eventKey="signup" title="Sign Up">
                <SignUpWindow />
            </Tab>
            </Tabs>
        </Modal.Body>     
        </Modal> 
       </>
    )}

export default BeMember;