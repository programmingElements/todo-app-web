import { createContext, useContext } from "react";

const TodosContext = createContext([]);

export default TodosContext;

export const TodosProvider = TodosContext.Provider;

export function useTodosContext() {
    return useContext(TodosContext);
};