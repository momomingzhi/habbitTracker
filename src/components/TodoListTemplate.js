import React from 'react';
import './TodoListTemplate.css';
import './SelectTerm.css';

const TodoListTemplate = ({form, children}) => {
  return (
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
      <input className="btn" type="button" name="btn1" value="다음" onClick="location.href='./SelectTerm.js'"></input>
      <button type="button" onClick="alert('안녕안녕')">안녕</button>
     
          
     
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;