import React from 'react';
import Board from './Board';
import Quiz from './Quiz';
import './Game1.css';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import WinPage from '../../utils/WinPage'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


const Game1 = () => {
    const [ progress, setProgress] = useState(0);


    const pack1 = {
        n:1,
        quest:"8 - 2",
        n1:8,
        operation:"-",
        n2:2,
        r1:7,
        r2:9,
        r3: 6,
        r4:2,
        right:3,
        setProgress:setProgress,
        progress:progress,


    }
    const pack2 = {
        n:2,
        quest:"23 - 6",
        n1:23,
        operation:"-",
        n2:6,
        r1:19,
        r2: 17,
        r3:9,
        r4:14,
        right:2,
        setProgress:setProgress,
        progress:progress,



    }
    const pack3 = {
        n:3,
        quest:"11 - 8",
        n1:11,
        operation:"-",
        n2:8,
        r1:5,
        r2:2,
        r3:-3,
        r4: 3,
        right:4,
        setProgress:setProgress,
        progress:progress,
    }
    



    return (
        <Board>
            <CardDeck>
                <Quiz pack={pack1}>
                </Quiz>
                <Quiz pack={pack2}>
                </Quiz>
                <Quiz pack={pack3}>
                </Quiz>
            {progress==3 ? <WinPage></WinPage> : null}
            </CardDeck>
        </Board>
    )
}

export default Game1
