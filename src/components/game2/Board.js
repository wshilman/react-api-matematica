import React from 'react';
import './Game2.css';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

const Board = props => {
    return (
        <DndProvider backend={Backend}>
            <div className='container'>
                <div className='board'>
                    {props.children}
                </div>
            </div> 
        </DndProvider>
    )
}

export default Board
