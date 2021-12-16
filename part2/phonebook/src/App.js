import React, {useState} from 'react'
import Person from "./components/Person";


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
            <div>filter shown with <input value={newSearch} onChange={handleSearch}/></div>
            <h2>Add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input name={'name'} value={newName} onChange={handleChange}/>
                </div>
                <div>
                    number: <input name={'number'} value={newNumber} onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.filter(p => p.name.toLowerCase().includes(newSearch.toLowerCase())).map(person => <Person
                    key={person.name} person={person}/>)}
            </ul>
        </div>
    )
}

export default App