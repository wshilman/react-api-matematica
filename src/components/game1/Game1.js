import React from 'react'
import Board from './Board'
import Card from './Card'
import './Game1.css'



const Game1 = props => {

    return (
        <div className='flexbox'>
            <Board id='board-one' className='board'> 
                <Card id='card-one' draggable='true' className='card'>
                <p>Carta n 1</p>
                </Card>
            </Board>

            <Board id='board-two' className='board'> 
                <Card id='card-two' draggable='true' className='card'>
                <p>Carta n 2</p>
                </Card>
            </Board>

        </div>
    )
}

export default Game1


