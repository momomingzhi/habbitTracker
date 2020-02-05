import React,{ useState } from 'react';
import './SelectTerm.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
  
const SelectTerm =({setFrom, setTo, history})=>{
        // const [from,setFrom]=useState('');
        // const [to,setTo]=useState('');
        const onChangeFrom= (e) =>{
            setFrom(e.target.value);
        }
        const onChangeTo= (e) =>{
            setTo(e.target.value);
        }
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
            
            <input type="date"  min="2020-01-26" max="2020-12-31"  onChange={onChangeFrom}></input>
            
            </div>
            <div className="habbitTitle">
                To
            </div>
            <div className="habbitTitle input"> 
            <input type="date"  min="2020-01-26" max="2020-12-31" onChange={onChangeTo}></input>
      
            </div>
            <Link to="/Title">
                <input className="btn" type="button" name="btn1" value="이전" onClick={()=>{}}></input>
            </Link>
            <Link to="/Log">
                <input className="btn" type="button" name="btn1" value="다음" onClick={()=>{}}></input>
            </Link>
            
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