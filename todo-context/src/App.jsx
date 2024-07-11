import { useReducer } from 'react'
import './App.css'
import TodoContainer from './components/TodoContainer'
import { TodosProvider } from './utils/TodosContext'

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
          return [action.payload, ...state];

    default :
          return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const data = {
    todos,
    dispatch,
  }
  
  return (
    <TodosProvider value={data}>
      <TodoContainer />
    </TodosProvider>
  )
}

export default App
