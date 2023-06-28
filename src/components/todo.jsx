
import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
  <div 
    className="todo" 
    style={{ textDecoration: todo.isCOmpleted ? " line-through" : "" }}>
           <div className='content'>
               <p>{todo.text}</p>
               <p className='category'>({todo.category})</p>
           </div>
           <div>
               <button className='complete' onClick={() => completeTodo(todo.id)}>ok</button>
               <button className='delete' onClick={() => removeTodo(todo.id)}>x</button>
           </div>
       </div>
  )
}

export default Todo