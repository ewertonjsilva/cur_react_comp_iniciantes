import React from 'react'; 

import Task from './Task';

const Tasks = ({ tasks, handleTaskClick, handleAddTaskDelete }) => { // usei destructure ao invés de props
    return (
        <>
            {tasks.map((task) => <Task task={task} handleTaskClick={handleTaskClick} handleAddTaskDelete={handleAddTaskDelete} />)}
        </>
    );
}

export default Tasks;