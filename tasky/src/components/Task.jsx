import React from 'react';

const Task = (props) => {
    return (
        <div className="card">
            <p>{props.title}</p>
            <p className="deadline">Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
        </div>
    )
    
}





export default Task;
