import React from 'react'
import Board from './Board'
import WinPage from '../../utils/WinPage'

import { Source , Target } from './Card'
import { useState }from 'react';




const Game3 = () => {
    const [target, setTarget] = useState(0);
    const [progress, setProgress] = useState(0);

    const targetProps = {
        target:target,
        setProgress:setProgress,
        progress:progress
    }



    return (
        <Board target={target} progress={progress}>
            <Source class='source1' text='$5' id="13" setTarget={setTarget}></Source>
            <Source class='source2' text='$10' id="5" setTarget={setTarget} ></Source>
            <Source class='source3' text='$20' id="13" setTarget={setTarget}></Source>
            <Source class='source4' text='$50' id="13" setTarget={setTarget}></Source>
            <Source class='source5' text='$100' id="13" setTarget={setTarget}></Source>

            <label class='label1'>15</label>
            <Target class='target1' text='0' pack={targetProps}></Target>

            <label class='label2'>75</label>
            <Target class='target2' text='0' pack={targetProps}></Target>

            <label class='label3'>250</label>
            <Target class='target3' text='0'  pack={targetProps}></Target>

            {progress==3 ? <WinPage></WinPage> : null}
        </Board>
    )
}

export default Game3
