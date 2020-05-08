import React from 'react'
import Board from './Board'
import WinPage from '../../utils/WinPage'

import { Source , Target } from './Card'
import { useState }from 'react';




const Game2 = () => {
    const [target, setTarget] = useState(0);
    const [progress, setProgress] = useState(0);

    const targetProps = {
        target:target,
        setProgress:setProgress,
        progress:progress
    }



    return (
        <Board target={target} progress={progress}>
            <Source class='source1' text='7 + 6' id="13" setTarget={setTarget}></Source>
            <Source class='source2' text='4 - 9' id="-5" setTarget={setTarget}></Source>
            <Source class='source3' text='9 - 4' id="5" setTarget={setTarget} ></Source>
            <Target class='target1' text='-5' pack={targetProps}></Target>
            <Target class='target2' text='5' pack={targetProps}></Target>
            <Target class='target3' text='13'  pack={targetProps}></Target>
            {progress==3 ? <WinPage></WinPage> : null}
        </Board>
    )
}

export default Game2
