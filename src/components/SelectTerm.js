import React, { Component } from 'react';
import './SelectTerm.css';

// const SelectTerm = ({value, onChange, onCreate, onKeyPress}) => {
//     return (
//       <div className="form">
//         <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
//         <div className="create-button" onClick={onCreate}>
//           추가
//         </div>
//       </div>
//     );
//   };
  
const SelectTerm =({history})=>{
    
        return(
            <main className="todo-list-template">
            <div className="title">
              습관 기록 하기
            </div>
            <div className="habbitTitle">
                From
            </div>
            {/* <section className="form-wrapper">
              {form}
            </section> */}
            <div className="habbitTitle input">
            
            <input type="date"  min="2020-01-26" max="2020-12-31"></input>
            
            </div>
            <div className="habbitTitle">
                To
            </div>
            <div className="habbitTitle input">
            <input type="date"  min="2020-01-26" max="2020-12-31"></input>
      
            </div>
            <input className="btn" type="button" name="btn1" value="이전" onClick={()=>{history.push('/Title')}}></input>
            <input className="btn" type="button" name="btn1" value="다음" onClick={()=>{history.push('/Log')}}></input>
            {/* <button type="button" onClick="alert('안녕안녕')">안녕</button> */}
            </main>
        );
    


};
// const SelectTerm = ({match}) => {
//     return(
//         <div>
//             <h2>Hello! {match.params.name}</h2>
//         </div>
//     )
// }

export default SelectTerm;