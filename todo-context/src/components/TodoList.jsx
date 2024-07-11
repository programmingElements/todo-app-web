import React from "react";
import Todo from "./Todo";
import { useTodosContext } from "../utils/TodosContext";

const TodoList = () => {
    const {todos} = useTodosContext();
    return <div>
        {
            todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} />
            })
        }

        {
            todos.length === 0 && <h2>No Todos Found!</h2>
        }
    </div>
}

export default TodoList;