import React ,{ useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from './App';
import LoginWindow from './LoginWindow';
//import { AppContext } from './NavBar';
import Button from './Button';




const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const [userState,setUserState] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        userState.userInfo != null ? (
          <RouteComponent {...routeProps} />
        ) : (
          
          //<LoginWindow />
          <Redirect 
            push
            to={{
                    pathname: "/login",
                    state: {
                      showForm:true
                    }
                  }} />
        )
      }
    />
  );
};


export default PrivateRoute;
/*
  const PrivateRoute = ({ component: Component, ...rest }) => {

    
    const { user } = useContext(UserContext);
    console.log("Middleware worked!",user);
    return (

        <AppContext.Consumer>   
               {(user)=>{
                  {({ isAuth, login, logout }) => ( ________________________BEGIN making sure middleware works and state is referenced */
                  //console.log(user);
                  //console.log("Middle ware");
                /*________________________END making sure middleware works and state is referenced 

                 console.log(  user + " <--- is authenticated from ProtectedRoute. true or false?")

                 // if(context.state.authenticated){

                    return(
                        
                  

                        <Route {...rest} render={(renderProps) => {
                           console.log('Rendered Props',renderProps);
                           return (<Component {...renderProps} />)
                        }}/>

                    )  

                  /*}else{

                    return <Redirect to="/"/>

                  }

                }}

        </AppContext.Consumer>   
    )


};

export default PrivateRoute;
*/
