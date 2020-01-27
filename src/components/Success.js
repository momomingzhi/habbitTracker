import React from 'react';
import './Title.css';
import './Success.css';
import SelectTerm from './SelectTerm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Success=({history})=>{
    

    return(
        
        <main className="todo-list-template">
      <div className="title">
        습관 기록 하기
      </div>
      <div className="success">
            Success
      </div>
      {/* <section className="form-wrapper">
        {form}
      </section> */}
      
      </main>
    );

      

};


export default Success;