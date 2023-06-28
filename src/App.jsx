import { useState } from 'react'
import "./App.css";

import Todoform from './components/todoform';
import Todo from './components/todo';
import Search from './components/search';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCOmpleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCOmpleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudar",
      isCOmpleted: false,
    },



  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Acs")

  const addTodos = (text, category) => {
    const newTodo = [...todos,
    {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCOmpleted: false,
    }
    ];

    setTodos(newTodo)
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCOmpleted = !todo.isCOmpleted : todo);
    setTodos(newTodos)
  };


  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className='todo-list'>

        {todos.filter((todo) => filter === "All" ? true : filter === "complete" ? todo.isCOmpleted : !todo.isCOmpleted
        )
        .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))//fazendo um filtro para pesquisar os afazeres
        .map((todo) => (  
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <Todoform addTodos={addTodos} />
    </div>

  )
}

export default App
