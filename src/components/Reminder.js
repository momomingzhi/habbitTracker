import React from 'react';
import './Title.css';
import './Reminder.css';
import SelectTerm from './SelectTerm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Reminder=({history})=>{
    

    return(
        
        <main className="todo-list-template">
      <div className="title">
        습관 기록 하기
      </div>
      <div className="habbitTitle">
          Reminder
      </div>
      {/* <section className="form-wrapper">
        {form}
      </section> */}
      <div className="habbitTitle input">
        <input name="how" type="text" size="50" />
      </div>
      
     
      {/* <div>
          <nav>
              <ul>
                  <li>
                  <Link to="/Term">SelectTerm</Link>
                  </li>
              </ul>
          </nav>
      </div> */}
        <div className="week"> 
            <input type="checkbox" name="color" value="mon" /> 월
            <input type="checkbox" name="color" value="mon" /> 화
            <input type="checkbox" name="color" value="mon" /> 수
            <input type="checkbox" name="color" value="mon" /> 목
            <input type="checkbox" name="color" value="mon" /> 금
            <input type="checkbox" name="color" value="mon" /> 토
            <input type="checkbox" name="color" value="mon" /> 일

        </div>
        <div className="time">
            <p>
            <input type="time"/>
            </p>
        </div>
        
          
            {/* <Route path="/Term" component={SelectTerm}/> */}
      <input className="btn" type="button" name="btn1" value="이전" onClick={()=>{history.push('/Term')}}></input>
      <input className="btn" type="button" name="btn1" value="다음" onClick={()=>{history.push('/Success')}}></input>
      {/* <button type="button" onClick="alert('안녕안녕')">안녕</button> */}
      </main>
    );

      

};


export default Reminder;