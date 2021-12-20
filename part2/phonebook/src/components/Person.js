import React from "react";

const Person = ({person, deleted}) => {
    return (
        <li>
            {person.name} {person.number}
            <button onClick={() => deleted(person.id)}>delete</button>
        </li>)
}

export default Person