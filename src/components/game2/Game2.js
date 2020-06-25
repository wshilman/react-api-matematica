import React from 'react'
import Board from './Board'
import WinPage from '../../utils/WinPage'

import { Source , Target } from './Card'
import { useState }from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Grid from '@material-ui/core/Grid';






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
            <CardDeck>
                <Grid container spacing={12}>
                    <Grid item xs={6}>
                        <Source class='source1 source' text='7 + 6' id="13" setTarget={setTarget}></Source>
                    </Grid>
                    <Grid item xs={6}>
                        <Target class=' containerPig target' text='-5' pack={targetProps}></Target>
                    </Grid>
                    <Grid item xs={6}>
                        <Source class='source2 source' text='4 - 9' id="-5" setTarget={setTarget}></Source>
                    </Grid>
                    <Grid item xs={6}>
                        <Target class=' containerPig target' text='5' pack={targetProps}></Target>
                    </Grid>
                    <Grid item xs={6}>
                        <Source class='source3 source' text='9 - 4' id="5" setTarget={setTarget} ></Source>
                    </Grid>
                    <Grid item xs={6}>
                        <Target class=' containerPig target' text='13'  pack={targetProps}></Target>
                    </Grid>
                </Grid>
                {progress==3 ? <WinPage></WinPage> : null}
            </CardDeck>
        </Board>
    )
}

export default Game2
