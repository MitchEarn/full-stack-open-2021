import React, {useEffect, useState} from 'react'
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import phonebookService from "./services/phonebook";
import Person from "./components/Person";
import Notification from "./components/Notification";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newSearch, setNewSearch] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        phonebookService.getAll()
            .then(response => setPersons(response))

    }, [])

    const handleSearch = (event) => {
        setNewSearch(event.target.value)
    }

    const handleChange = (event) => {
        event.target.name === 'name' ? setNewName(event.target.value) : setNewNumber(event.target.value)
    }

    const updatePerson = (personToUpdate, number) => {
        if (window.confirm(`${personToUpdate.name} is already added to phonebook. Replace the old number with a new one?`)) {
            phonebookService.update(personToUpdate.id, {...personToUpdate, number: number})
                .then(returnedPerson => {
                    setPersons(persons.map(person => person.id !== personToUpdate.id ? person : returnedPerson))
                    setNewName('')
                    setNewNumber('')

                })

        } else {
            console.log('fail');
        }
    }

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }
        const checkIfExists = persons.find(person => person.name === newName)
        checkIfExists ? updatePerson(checkIfExists, newNumber) :
            phonebookService
                .create(personObject)
                .then(returnedPerson => {
                        setPersons(persons.concat(returnedPerson))
                        setErrorMessage(`${newName} has been added to phonebook`)
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)
                        setNewName('')
                        setNewNumber('')

                    }
                )
    }
    const deletePerson = (id) => {
        phonebookService.remove(id).then(() => {
            setPersons([...persons].filter(person => person.id !== id))
        }).catch(() => {
            setErrorMessage(
                'information already removed from server'
            )
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
            setPersons([...persons].filter(person => person.id !== id))
        })
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={errorMessage}/>
            <Filter newSearch={newSearch} handleSearch={handleSearch}/>
            <h2>Add a new</h2>
            <PersonForm submission={addPerson} changeHandler={handleChange} name={newName} number={newNumber}/>
            <h2>Numbers</h2>
            <ul>
                {persons.filter(p => p.name.toLowerCase().includes(newSearch.toLowerCase())).map(person => <Person
                    key={person.name} person={person} deleted={() => deletePerson(person.id)}/>)}

            </ul>

        </div>

    )
}




export default App