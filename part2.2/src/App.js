import { useEffect, useState } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'
import persons from './services/personsService'
import personsService from './services/personsService'
import './index.css'


//funktio joka katsoo sisältääkö persons lisättävän nimen
function sisaltaa(persons, personObj) {
  
  let i;
  for (i = 0; i < 1; i++) {
    const nimi1 = persons[i].name
    const nimi2 = personObj.name
    const vastaus = (nimi1 === nimi2)
    console.log(vastaus, nimi1, nimi2)
      if (nimi1 === nimi2) {
          return true
      }
  return false 
  } 
}

const App = () => {


  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [addMsg, setAddMsg] = useState('')

  //axios.get('http://localhost:3001/persons')
  useEffect(() => {
    personsService
      .get()
    .then(response => {
      setPersons(response.data)
    })
  }, [])


  //Lisätään henkilö
  const addName = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }

    if (sisaltaa(persons, personObj) === true) { 
      console.log('toimii')
      window.alert(`${newName} is already in the phonebook`)}
    else {
      personsService
      .add(personObj)
      .then(response => {
        setPersons(persons.concat(personObj))
        setNewName('')
        setNewNumber('')
        console.log(response)
        setAddMsg(
          `${personObj.name} lisätty`)
          setTimeout(() => {
            setAddMsg(null)
          }, 5000)
        })

    } 
    
  }

//Poistetaan henkilö
  const deleteName = (event,id) => {
    event.preventDefault()
    if (window.confirm("Poistetaanko?")) {
      personsService
      .deletet(5)
      .then(response => {
        setAddMsg(
          `Poistettu`)
          setTimeout(() => {
            setAddMsg(null)
          }, 5000)
        })
      }
    }

//Ilmoitus tapahtumista
const Notification=({message})=>{if(message ===null) {return null}
else return(<div className="notif">
  <p>
    {message}
    </p>
    </div>)}
    
//Käsiyellään nimikentän arvo
  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

//Käsitellään numerokentän arvo
const handleNumber = (event) => {
  console.log(event.target.value)
  setNewNumber(event.target.value)
}

const handleFil = (event) => {
  setNewNumber(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addMsg}/>
      <Filter newFilter={newFilter} handleFil={handleFil}/>
      <h2>Add a new</h2>
      <PersonForm addName={addName} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
      <h2>Numbers</h2>
      <Person person={persons} deleteName={deleteName}/>
    </div>
  )

  }

export default App