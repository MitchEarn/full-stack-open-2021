import React, {useEffect, useState} from 'react'
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import PersonList from "./components/PersonList";
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newSearch, setNewSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })

    }, [])

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