import Person from "./Person";
import React from "react";

const PersonList = ({persons, filter}) => {
    return (
        <ul>
            {persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())).map(person => <Person
                key={person.name} person={person}/>)}
        </ul>
    )
}

export default PersonList