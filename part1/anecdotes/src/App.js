import React, {useState} from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(7).fill(0))
    const maxVotes = Math.max(...votes)
    const handleVotes = (number) => {
        const copy = [...votes]
        copy[number] += 1
        setVotes(copy)
    }

    const random = ([list]) => {
        const num = Math.floor(Math.random() * list.length)
        setSelected(num)
    }

    const mostVotes = () => {
        return votes.indexOf(maxVotes)
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>

            <button onClick={() => handleVotes(selected)}>Vote</button>
            <button onClick={() => random([anecdotes])}>next anecdote</button>
            <h1>Anecdote with the most votes</h1>
            <p>{anecdotes[mostVotes()]} has {maxVotes} votes</p>
        </div>
    )
}
export default App
