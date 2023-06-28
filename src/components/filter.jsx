
//vai trazer as tarefas que estão completas ou incompletas
function Filter({filter, setFilter, setSort}) {
  return (
    <div className='filter'>
        <h2>Filtrar:</h2>
        <div className='filter-options'>
            <div>
                <p>Status</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="complete">Completas</option>
                    <option value="incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabetica</p>
                <button onClick={() => setSort("Asc")}>Acs</button>
                <button onClick={() => setSort("Desc")}>Desc</button>
            </div>
        </div>

    </div>
  )
}

export default Filter