import React from 'react'
import Board from './Board'
import WinPage from '../../utils/WinPage'

import { Source , Target } from './Card'
import { useState, useEffect } from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Grid from '@material-ui/core/Grid';
import FooterNav from '../FooterNav';

import axios from 'axios';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from "../../services/Alert";

import { Redirect, Link } from 'react-router-dom';






const Game2 = () => {
    const [target, setTarget] = useState(0);
    const [progress, setProgress] = useState(0);
    const [ data, setData] = useState([]);
    const [ sources, setSources] = useState([]);
    const [ targets, setTargets] = useState([]);
    const nivel = localStorage.getItem('idLvl');
    const nivelNumber = window.Number.parseInt(nivel);
    const removeFrom = 50*nivelNumber;
    const total = 100*nivelNumber;
    const [ points, setPoints] = useState(total);

    const removePoints = ()=>{
        console.log("--------------- FROM ",points);
        let newPoints = points-removeFrom;
        console.log("--------------- newPoints",newPoints);
        setPoints(newPoints);
        if(newPoints<=0){
            Alert.tryAgain();
            handlePoints(0);
        }
    }

    const handlePoints = (points) => {
        // pointsGame1Lvl1
        const now = localStorage.getItem(`pointsGame2Lvl${nivel}`)
        now ? localStorage.setItem(`pointsGame2Lvl${nivel}`, parseInt(now) + points):localStorage.setItem(`pointsGame2Lvl${nivel}`,points)
        console.log(localStorage.getItem(`pointsGame2Lvl${nivel}`))
    }
    

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios(
            'http://localhost:8000/game/eat/level/'+localStorage.getItem('idLvl'),
        ).then((result)=>{
            let rows = result.data;
            let data = [
                rows[2],rows[1],rows[0]
            ];
            if(nivel==2){
                data = [
                    rows[1],rows[0],rows[2]
                ];
            }
            if(nivel==3){
                data = [
                    rows[0],rows[1],rows[2]
                ];
            }
            setData(data);
            console.log(data);
            setLoading(loading => false);
        }).catch(()=>{
            
        });
    }, []);
        
    const renderRedirect = () => {
        if(!localStorage.getItem('name')){
          return(<Redirect to='/'></Redirect>)
        }
      }

    
    const avanzar = ()=>{
        setProgress(progress +1);
        
        if(progress==2){
            handlePoints(points);
            
            let puntaje = points;
            Alert.finishLevel({puntaje,level:nivel,route:"juego2"});
        }
    }

    const targetProps = {
        target:target,
        setProgress:setProgress,
        avanzar:avanzar,
        progress:progress,
        removePoints
    }



    return (loading
        ?
        <div>
            <Box width={1} maxWidth="sm" style={{ padding:"20px"}}>
                <LinearProgress />
            </Box>
        </div>
        :
        <Board target={target} progress={progress}>
            <h4>Resuelve y dale de comer al cerdito (Nivel {nivel})</h4>
            <CardDeck>
                <Grid container spacing={12}>
                    
                    <Grid item xs={6}>
                        <Source class='source1 source' index={0} text={data[0].value} id={data[0].rta} setTarget={setTarget}></Source>
                    </Grid>
                    <Grid item xs={6}>
                        <Target class=' containerPig target' index={1} operation={data[1].value}  text={data[1].rta} pack={targetProps}></Target>
                    </Grid>
                    <Grid item xs={6}>
                        <Source class='source2 source' index={1} text={data[1].value} id={data[1].rta} setTarget={setTarget}></Source>
                    </Grid>
                    <Grid item xs={6}>
                        <Target class=' containerPig target' index={0} operation={data[0].value} text={data[0].rta} pack={targetProps}></Target>
                    </Grid>
                    <Grid item xs={6}>
                        <Source class='source3 source' index={2} text={data[2].value} id={data[2].rta} setTarget={setTarget} ></Source>
                    </Grid>
                    <Grid item xs={6}>
                        <Target class=' containerPig target' index={2} operation={data[2].value}  text={data[2].rta}  pack={targetProps}></Target>
                    </Grid>
                </Grid>
                
            </CardDeck>
            <FooterNav/>
        </Board>
    )
}

export default Game2
