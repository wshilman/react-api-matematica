import React from 'react';
import Board from '../board/Board';
import Quiz from './Quiz';
import FooterNav from '../FooterNav';
import './Game3.css';
import { useState, useEffect } from 'react';
import WinPage from '../../utils/WinPage'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from "../../services/Alert";
import ApiRest from "../../services/ApiRest";



import CardDeck from 'react-bootstrap/CardDeck'
import { Redirect, Link } from 'react-router-dom';



const Game3 = () => {
    const [ progress, setProgress] = useState(0);
    const [ data, setData] = useState([]);
    const [ rtas, setRtas] = useState([]);
    const sumPoints = 10;
    const nivel = localStorage.getItem('idLvl');

    const handlePoints = (points) => {
        // pointsGame1Lvl1
        const now = localStorage.getItem(`pointsGame3Lvl${nivel}`)
        now ? localStorage.setItem(`pointsGame3Lvl${nivel}`, parseInt(now) + points):localStorage.setItem(`pointsGame3Lvl${nivel}`,points)
        console.log(localStorage.getItem(`pointsGame3Lvl${nivel}`))
    }

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        ApiRest.getPaintingGame(nivel).then((config)=>{
            setData(config.data);
            setRtas(config.rtas);
            setLoading(loading => false);
        })
    }, []);
        
    const renderRedirect = () => {
        if(!localStorage.getItem('name')){
          return(<Redirect to='/'></Redirect>)
        }
    }

    
    const handleClickCheck = ()=>{
        let ok = 0;
        let error = 0;
        let totalRta = 0;
        data.forEach(v=>{
            if(v.valueRta){
                totalRta++;
                if(v.valueRta == v.rta){
                    ok++;
                }else{
                    error++;
                }
            }  
        });
        let puntaje = (ok*sumPoints)+"/"+(totalRta*sumPoints);
        let finishLevel = nivel==3;
        handlePoints(puntaje);
        Alert.finishLevel({puntaje,level:nivel,route:"juego3"});
    
    }

    return (loading
            ?
            <div>
                <Box width={1} maxWidth="sm" style={{ padding:"20px"}}>
                    <LinearProgress />
                </Box>
            </div>
            :
        <Board>
            <h4 style={{marginLeft: "auto",marginRight: "auto"}}>Elige un color y pinta los corazoncitos (Nivel {nivel})</h4>
            <CardDeck>
                {/* {console.log(data)} */}
                <Quiz data={data} rtas={rtas} setData={setData}>
                </Quiz>
            </CardDeck>
            <div style={{marginLeft: "auto",marginRight: "auto",paddingTop:20}}>
            <Button
                    variant="outlined"
                    color="default"
                    size="large"
                    style={{marginLeft: "auto",marginRight: "auto",background: "#fde19b", fontSize: "x-large"}}
                    onClick={() => handleClickCheck()}
                >
                    Corregir
                </Button>

            </div>
            <FooterNav/>
            {renderRedirect()}
        </Board>
    )
}

export default Game3
