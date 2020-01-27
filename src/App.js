import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import SelectTerm from './components/SelectTerm';
import Form from './components/Form';
import Home from './components/Home';
import Title from './components/Title';
import Log from './components/Log';
import Reminder from './components/Reminder';
import Success from './components/Success';
//import {Home, SelectTerm, Title} from './components';
//import { Link, Route, Switch } from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <nav>
           <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
                <Link to="/Title">Title</Link>
             </li>
             <li>
                <Link to="/Term">Term</Link>
             </li>
           </ul>
         </nav>
       <div>
       
         <Route exact path='/' component={Home} />
         <Route path="/Title" component={Title}/>
         <Route path="/Term" component={SelectTerm}/>
         <Route path="/Log" component={Log}/>
         <Route path="/Reminder" component={Reminder}/>
         <Route path="/Success" component={Success}/>
       
       </div>
       </div>
     </Router>
    );
  }
}

export default App;



/*// "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test",
    // "eject": "react-scripts eject"  */