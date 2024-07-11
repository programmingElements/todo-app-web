import React, { useState } from "react";
import { useTodosContext } from "../utils/TodosContext";

const Todo = ({todo}) => {
    const {dispatch} = useTodosContext();
    const [isEditable, setIsEditable] = useState(false);
    const [editedInput, setEditedInput] = useState(todo.title);

    const toggle_todo = (id) => {
        dispatch({type: "TOGGLE_TODO", payload: id})
    }

    const edit_todo = (id) => {
        if (!todo.completed) {
            if (isEditable) {
                dispatch({ type: "EDIT_TODO", payload: {id, editedInput }})
                setIsEditable((prev) => !prev);
            } else {
                setIsEditable((prev) => !prev);
            }
        }
    }

    const delete_todo = (id) => {
        dispatch({ type: "DELETE_TODO", payload: id });
    }

    return <div style={{display: "flex", gap: "8px", alignItems: "center", justifyContent: "center"}}>
        <input type="checkbox" onChange={() => toggle_todo(todo.id)} />
        <p>
            {
                isEditable ?  (<input type="text" value={editedInput} onChange={(e) => setEditedInput(e.target.value)} />) : (<h3 style={{textDecoration: `${ todo.completed ? 'line-through' : '' } `}}>{todo.title}</h3>)
            }
        </p>
        <div style={{display: "flex", gap: "8px"}}>
            <button onClick={() => edit_todo(todo.id)}>{ isEditable ? "SAVE" : "EDIT"}</button>
            <button onClick={() => delete_todo(todo.id)}>DELETE</button>
        </div>
    </div>
}

export default Todo;