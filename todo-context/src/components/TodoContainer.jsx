import React from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

const TodoContainer = () => {
    return <div>
        <TodoHeader />
        <TodoInput />
        <TodoList />
    </div>
}

export default TodoContainer;