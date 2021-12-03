import React from "react";

export const Course = (props) => {
    const {course} = props

    return (
        <>
            <Header course={course}/>
            <Content course={course}/>
            <Total parts={course.parts}/>
        </>
    )
}

const Header = ({course}) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({parts}) => {
    const sum = parts.reduce((a, {exercises}) => a + exercises, 0)

    return (

        <strong>Number of exercises {sum}</strong>


    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({course}) => {

    return (
        <div>
            {course.parts.map(course => <Part part={course}/>)}
        </div>
    )
}