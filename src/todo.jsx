import { useState } from "react";
import "./todo.css";


function Todolist(props) {

    const [value, setValue] = useState("");
    return (
        <>
        <div className="todo-div">
            <h1 style={{textAlign: "center"}}>2Do or not 2Do?🤔</h1>
            <div className="todo-div-form">
                <input className="todo-text form-control" value={value} type="text" placeholder="Что бы вы хотели сделать?" onChange={(e)=>{setValue(e.target.value)}}/>
                <div className="todo-add" onClick={setValue}><span className="btn btn-primary">Добавить</span></div>
            </div>
            <ul className="todo-ul">
                <div style={{display:"flex"}}>
                    <li>пойти куда-то</li>
                    <button type="button" className="todo-btn btn btn-danger">delete</button>
                </div>
            </ul>
        </div>
        </>
    )
}

export default Todolist