import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos, setTodos] = useState([]);
// fetch is wrong way of doing it as it sends infinite requests and we can use useEffect hook
  // fetch(`http://localhost:3000/todos`)
  // .then(async(res)=>{
  //   const json = await res.json();
  //   setTodos(json.todos);
  // })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/todos');
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, equivalent to componentDidMount

  return (
    <>
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos = {todos}></Todos>
      </div>
    </>
  )
}

export default App
