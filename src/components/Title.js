import React from 'react';
import './Title.css';
import './SelectTerm.css';
import SelectTerm from './SelectTerm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Title=({history})=>{
    

    return(
        
        <main className="todo-list-template">
      <div className="title">
        습관 기록 하기
      </div>
      <div className="habbitTitle">
          Title
      </div>
      {/* <section className="form-wrapper">
        {form}
      </section> */}
      <div className="habbitTitle input">
      <input name="cycle" type="text" size="50" />
      </div>
      <div className="habbitTitle">
          Cycle
      </div>
      <div className="habbitTitle input">
        once in    <input name="cycle" type="text" size="1" /> days

      </div>

      <div className="habbitTitle">
          Action
      </div>
      <div className="habbitTitle input">
      <input name="action" type="text" size="50" />
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
      {/* <Route path="/Term" component={SelectTerm}/> */}
      <input className="btn" type="button" name="btn1" value="다음" onClick={()=>{history.push('/Term')}}></input>
      {/* <button type="button" onClick="alert('안녕안녕')">안녕</button> */}
      </main>
    );

      

};


export default Title;