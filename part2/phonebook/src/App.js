import React, {useState} from 'react'
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import PersonList from "./components/PersonList";


const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '0414 697 534'},
        {name: 'John Smith', number: '0423 589 111'},
        {name: 'Alison Jones', number: '0444 122 999'},
        {name: 'James Bond', number: '0400 000 007'},
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newSearch, setNewSearch] = useState('')

    console.log(newName)

    const handleSearch = (event) => {
        setNewSearch(event.target.value)
    }

    const handleChange = (event) => {
        event.target.name === 'name' ? setNewName(event.target.value) : setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }
        persons.find(person => person.name === newName) ? alert(`${newName} is already added to phonebook`) :
            setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter newSearch={newSearch} handleSearch={handleSearch}/>
            <h2>Add a new</h2>
            <PersonForm submission={addPerson} changeHandler={handleChange} name={newName} number={newNumber}/>
            <h2>Numbers</h2>
            <PersonList persons={persons} filter={newSearch}/>
        </div>
    )
}

export default App