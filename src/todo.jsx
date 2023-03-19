import { useState } from "react";
import "./todo.css";


function Todolist(props) {

    const [value, setValue] = useState("");
    return (
        <>
        <div className="todo-div">
            <div className="todo-div-form">
                <input className="todo-text form-control" value={value} type="text" placeholder="Что бы вы хотели сделать?"/>
                <div className=".todo-add" onClick={setValue} ><span className="btn btn-primary">Добавить</span></div>
            </div>
            <ul className="todo-ul">
                <li>пойти куда-то</li>
            </ul>
        </div>
        </>
    )
}

export default Todolist