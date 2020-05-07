import React from 'react'
import Board from './Board'
import { Source , Target } from './Card'



const Game2 = () => {
    return (
        <Board>
            <Source class='source1' text='7 + 6'></Source>
            <Source class='source2' text='4 - 9'></Source>
            <Source class='source3' text='9 - 4'></Source>
            <Target class='target1' text='-5'></Target>
            <Target class='target2' text='5'></Target>
            <Target class='target3' text='13'></Target>
        </Board>
    )
}

export default Game2
