import React, { useState } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';

import SelectTerm from './components/SelectTerm';
import Home from './components/Home';
import Title from './components/Title';
import Log from './components/Log';
import Reminder from './components/Reminder';
import Success from './components/Success';
//import {Home, SelectTerm, Title} from './components';
//import { Link, Route, Switch } from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function App() {
  
     const [title, setTitle] = useState("");
      const [cycle,setCycle]=useState('');
      const [action,setAction]=useState('');
      console.log(`title: ${title}`);
      console.log(`cycle: ${cycle}`);
      console.log(`action: ${action}`);
      const [from,setFrom]=useState('');
      const [to,setTo]=useState('');

      console.log(`from: ${from}`);
      console.log(`to: ${to}`);

      const [reminder,setReminder]=useState('');

      console.log(`reminder: ${reminder}`);
      
      const [log,setLog]=useState('');
      console.log(`log: ${log}`);
  //   titleCallBack = (e) =>{
     
  //             this.setState({
  //                 title: e.target.value
  //             });
          
      
  //   }
  // cycleCallBack = (e) =>{
   
  //           this.setState({
  //             cycle: e.target.value
  //           });
        
    
  // }
  // actionCallBack = (e) =>{
    
  //           this.setState({
  //             action: e.target.value
  //           });
        
    
  // }
  
    
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
       <div>
         {/* <Title onChangeTitle={this.titleCallBack} onChangeCycle={this.cycleCallBack} onChangeAction={this.actionCallBack} />> */}
       </div>
         <Route exact path='/' component={Home} />
         <Route path="/Title" render={props => {return( 
                                                  <Title setTitle={setTitle} setCycle={setCycle} setAction = {setAction}
                                                   />)}} />
         <Route path="/Term"  render={props => {return( 
                                                  <SelectTerm setFrom={setFrom} setTo={setTo} 
                                                   />)}}/>
         <Route path="/Log"  render={props => {return( 
                                                  <Log setLog={setLog}
                                                   />)}}/>
         <Route path="/Reminder" render={props => {return( 
                                                  <Reminder setReminder={setReminder}
                                                   />)}}/>
         <Route path="/Success" component={Success}/>
       
       </div>
       </div>
     </Router>
    );
  
}

export default App;



/*// "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test",
    // "eject": "react-scripts eject"  */