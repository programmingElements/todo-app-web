import React, { useState } from "react";
import {nanoid} from "nanoid";
import {useTodosContext} from "../utils/TodosContext";

const TodoInput = () => {
    const {dispatch} = useTodosContext();
    const [input, setInput] = useState("");

    const updateInput = (e) => {
        setInput(e.target.value);
    }

    const add_todo = () => {
        const newTodo = {
            id: nanoid(),
            title: input,
            completed: false
        }

        dispatch({ type: "ADD_TODO", payload: newTodo });

        setInput("");
    }

    return <div>
        <input 
        type="text" 
        placeholder="Enter Text..."
        value={input}
        onChange={updateInput}
        style={{ padding: "12px", margin: "12px", border: "1px solid #000", borderRadius: "12px"}} />
        <button onClick={add_todo}>ADD</button>
    </div>
}

export default TodoInput;