import React from "react";
import { useTodosContext } from "../utils/TodosContext";

const TodoHeader = () => {
    const {todos, dispatch} = useTodosContext();
    return <div style={{
        display: "flex",
        gap: "12px",
        alignItems: "center"
    }}>
        <h1>
            Todo Web Application {todos.length} 
        </h1>
        <button onClick={() => dispatch({ type: "RESET_TODO" })}>Reset</button>
    </div>
}

export default TodoHeader;