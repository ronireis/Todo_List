import {useState} from 'react'

function Todoform( {addTodos} ) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handSubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;
    addTodos(value, category);
    setValue("")
    setCategory("")
  }

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handSubmit} >
            <input type="text" placeholder='Digitar titulo' value={value} onChange={(e) => setValue(e.target.value)}/>
            <select  value={category}  onChange={(e) => setCategory(e.target.value)}>
            <option value="Categoria">Selecione alguma Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudar"> Estudar </option>
            </select>
            <button type="submit"> Criar Tarefa</button>

        </form>
    </div>
  )
}

export default Todoform