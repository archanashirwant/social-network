import React, { useState,useContext,useEffect } from 'react';
import { UserContext } from './App';

const ShowPlayDates = () => {

    const [playdates,setPlayDates] = useState({});
    const [userState, setUserState] = useContext(UserContext);

    useEffect(() => {
        fetch(
            //URL
        'http://localhost:5000/playdates/',
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
        .then(playdates => { setPlayDates(playdates);console.log(playdates); })
        .catch(err => console.log('err',err) ) // change the state of the component  
    },[]);

    const followPlayDate = () => {    

    }
      return (
        <div className="ShowPlayDate">
            <div className="container">
        { 
            playdates.length > 0 ? (
                playdates.map(playdate => (
                    <div className="media-body" key={playdate._id}>
                        <h5 className="mt-0">{playdate.meetupdate}</h5>
                        <p>{playdate.place}</p>
                        <p>{playdate.message}</p>
                        <button className="btn btn-primary" onClick={followPlayDate}>Follow</button>
                    </div>    
                ))
            ):(
                <div>No Play dates to show</div>
            )
       }   
        </div>
        </div>
              
      )   
}

export default ShowPlayDates;