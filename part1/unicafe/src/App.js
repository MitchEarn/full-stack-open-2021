import {useState} from "react";


const Button = ({handleClick, text}) => {
    return <button onClick={handleClick}>{text}</button>
}

const StatisticLine = ({text, value}) => {

    return (
        <p>{text} {value}</p>
    )

}
const Statistics = (props) => {
    const {good, neutral, bad, all} = props


    return (
        <>
            <StatisticLine text={'Good'} value={good}/>
            <StatisticLine text={'Neutral'} value={neutral}/>
            <StatisticLine text={'Bad'} value={bad}/>
            <StatisticLine text={'All'} value={all}/>
            <StatisticLine text={'Average'} value={(good - bad) / all}/>
            <StatisticLine text={'Positive'} value={(good / all) * 100}/>


        </>
    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allFeedback, setAllFeedback] = useState(0)

    const handleGood = () => {
        setGood(good + 1)
        setAllFeedback(allFeedback + 1)
    }
    const handleNeutral = () => {
        setNeutral(neutral + 1)
        setAllFeedback(allFeedback + 1)
    }
    const handleBad = () => {
        setBad(bad + 1)
        setAllFeedback(allFeedback + 1)
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick={() => handleGood()} text='good'/>
            <Button handleClick={() => handleNeutral(neutral + 1)} text='neutral'/>
            <Button handleClick={() => handleBad(bad + 1)} text='bad'/>
            <h1>Statistics</h1>
            {allFeedback > 0 ? <Statistics good={good} neutral={neutral} bad={bad} all={allFeedback}/> :
                <p>No feedback given</p>}

        </div>
    )
}

export default App