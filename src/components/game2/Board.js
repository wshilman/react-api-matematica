import React from 'react';
import './Game2.css';
import BoardDefault from '../board/Board';

import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

const Board = props => {
    return (
        <BoardDefault style={{minHeight:'500px'}}> 
            <DndProvider backend={Backend}>
                <div className='container'>
                    <div className='board'>
                        {props.children}
                    </div>
                </div> 
            </DndProvider>
        </BoardDefault>
    )
}

export default Board
