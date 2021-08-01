import React, { useState } from 'react';

import Button from './Button';
import './AddTask.css';

const AddTask = ({ handleTaskAddition }) => { 
    const [inputData, setInputData] = useState(''); 

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }; 

    // pt2 inserção tarefa - recebe uma função via prop e a executa passando como parâmetro o valor de input
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData('');
    }

    return ( 
        <div className='add-task-container'>
            <input
                onChange={handleInputChange} 
                value={inputData}
                className='add-task-input' 
                type="text" /> 
            <div className='add-task-button-container'>
                <Button onClick={handleAddTaskClick}>Adicionar</Button> {/* pt3 passa a função criada para chamar a instrução de inseção na lista */}
            </div>            
        </div>
        
    );
}
 
export default AddTask;