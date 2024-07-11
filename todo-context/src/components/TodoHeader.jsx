import React from "react";
import { useTodosContext } from "../utils/TodosContext";

const TodoHeader = () => {
    const {todos} = useTodosContext();
    return <div>
        <h1>
            Todo Web Application {todos.length}
        </h1>
    </div>
}

export default TodoHeader;