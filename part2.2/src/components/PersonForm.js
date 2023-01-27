//Henkilötietojen täyttämislomake (nimi ja puh. nro) 
const PersonForm = ({addName, newName, handleName,newNumber, handleNumber}) => {

    return (
        <div>
        <form onSubmit={addName}>
        <div>
            Name: <input 
            value={newName}
            onChange={handleName}/>
        </div>
        <div>
            Number: <input
            value={newNumber}
            onChange={handleNumber}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
        </form>
        </div>
        )
    }

export default PersonForm