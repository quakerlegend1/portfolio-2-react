import { useState } from "react";
import "./todo.css";


function Todolist(props) {
    const [value, setValue] = useState(""); // состояние inputa
    const [values, setValues] = useState([]);// состояние массива со списком задач

    function addTodo() {
        if(value !== "") {
            setValues([...values, value]);
            setValue("");
        } else {
            alert("Поле не может быть пустым!")
        }  
    }

    function deleteTodo(currentEl) {
        const newTodos = values.filter((value)=>{
            return value !== currentEl
        });
        setValues(newTodos)
    }

    return (
        <div className="todo-div">
            <h1 style={{textAlign: "center"}}>2Do or not 2Do?🤔</h1>

            <form className="todo-div-form" onSubmit={(e)=>{e.preventDefault()}}>
                <input 
                    className="todo-text form-control" 
                    value={value} type="text" 
                    placeholder="Что бы вы хотели сделать?" 
                    onChange={(e)=>{setValue(e.target.value)
                //onChange проверяет изменилось ли состояние поля ввода, если да, то setValue записывает/запоминает это новое состояние
                    }}
                />
                <div className="todo-add">
                    <button className="btn btn-primary" onClick={addTodo}>Добавить</button>
                </div>
            </form>

            { values.length > 0 ? (
                <ul className="todo-ul">
                    {values.map((el,index)=> (
                        <div key={index} style={{display:"flex"}}>
                            <li>{el}</li>
                            <button 
                                type="button" 
                                className="todo-btn btn btn-danger" 
                                onClick={()=> {deleteTodo(el)}}>
                                delete
                            </button>
                        </div>
                    ))}
                </ul> 
            ) : (
                <div className="todo-empty">
                    <h3>Не найдено задач</h3>
                </div>
            )}
        </div>
    );
};

export default Todolist