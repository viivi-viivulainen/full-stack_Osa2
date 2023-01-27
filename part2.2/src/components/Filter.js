const Filter = ({newFilter, handleFil}) => {
    return (
    <div>
    <form>
    <div>
      Filter: <input
      value={newFilter}
      onChange={handleFil}/>
    </div>
    </form>
    </div>
    )
}

export default Filter