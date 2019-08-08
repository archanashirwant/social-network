import React ,{ useState , useContext } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MyProfile from './MyProfile';
import ShowPlayDates from './ShowPlayDates';
import PrivateRoute from './PrivateRoute';
import EditProfile from './EditProfile';
import { UserContext } from './App';


const UserNavigation = ({ match })=> {

    const [ userState, setUserState ] = useContext(UserContext);

    return(
      <UserContext.Consumer>   
        {   
          (user) => ( 
                <div className="row">
                  <div className="col-sm-4">
                  <nav className="navbar bg-light ">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to={`${match.url}/profile`} className="nav-link">My Profile</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={`${match.url}/myplaydates`} className="nav-link">My Play Dates</Link>
                      </li>
                      <li className="nav-item">
                        <Link to={`${match.url}/joining`} className="nav-link">Joining Play Dates</Link>
                      </li>
                    </ul>

                    </nav>
                  </div>
                  <div className="col-sm-8" >
                    {match.isExact && <MyProfile /> }
                    
                    <Switch>
                      <PrivateRoute  path={`${match.url}/profile`} component={MyProfile} />
                      <PrivateRoute  path={`${match.url}/myplaydates`} component={ShowPlayDates} />
                      <PrivateRoute  path={`${match.url}/joining`} component={MyProfile} />
                      <PrivateRoute  path={`${match.url}/editprofile`} component={EditProfile} />
                    </Switch>
                  </div>  
                </div>  
            
       )
      }            
    </UserContext.Consumer>    
    )
  }

export default UserNavigation;