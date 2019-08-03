import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import protected from './Protected';
import PrivateRoute from './PrivateRoute';
/*import Blog from './Blog';
import Contact from './Contact';
*/
import './App.css';


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path ="/" exact component={Home} />            
                <Route path ="/about" component={About} />
                <PrivateRoute  path="/protected" component={protected} />            
               { /* <Route path ="/ideas" component={Ideas} />            
                <Route path ="/blog" component={Blog} />            
    <Route path ="/contact" component={Contact} />    */ }
            </Switch>    
        </BrowserRouter>
    )
}

export default App;
