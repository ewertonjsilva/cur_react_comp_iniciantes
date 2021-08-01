import React from 'react';

import './Button.css'

const Button = ({ children, onClick }) => {
    return ( 
        <button onClick={onClick} className='button'> {/** evento passado via prop pt1 inserção */}
            {children} {/** valor passado na chamada para apresentar o texto do botão */}
        </button>
     );
}
 
export default Button;

