import React from 'react';
import './TodoListTemplate.css';

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
      <input name="cycle" type="text" size="50" />
      </div>
     
          
     
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;