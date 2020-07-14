import React from 'react';
import Board from '../board/Board';
import Quiz from './Quiz';
import FooterNav from '../FooterNav';
import './Game1.css';
import { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import ApiRest from "../../services/ApiRest";
import Alert from "../../services/Alert";


import CardDeck from 'react-bootstrap/CardDeck'
import { Redirect, Link } from 'react-router-dom';

const Game1 = () => {
    const [ progress, setProgress] = useState(0);
    
    const nivel = localStorage.getItem('idLvl');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
       
        ApiRest.getMultipleGame(nivel).then((config)=>{
            setData(config);
            setLoading(false);
            console.log("--------------------------------------",config);
        }).catch((e)=>{
            Alert.error({message:`Oops! Hay un error`});  
            console.log(e);
        });
      }, []);

    
    
    
    const renderRedirect = () => {
        if(!localStorage.getItem('name')){
          return(<Redirect to='/'></Redirect>)
        }
      }



    return (loading
            ?
            <div>
                <Box width={1} maxWidth="sm" style={{ padding:"20px"}}>
                    <LinearProgress />
                </Box>
            </div>
            :<Board>
                <h4 style={{marginLeft: "auto",marginRight: "auto"}}>Resuelve y Elige la opcion correcta (Nivel {nivel})</h4>
            <CardDeck>
                {/* {console.log(data)} */}
                <Quiz data={data[0]} setData={setData} progress={progress} setProgress={setProgress} finishProgress={2}>
                </Quiz>
                <Quiz  data={data[1]} setData={setData} progress={progress} setProgress={setProgress} finishProgress={2}>
                </Quiz>
                <Quiz  data={data[2]} setData={setData}  progress={progress} setProgress={setProgress} finishProgress={2}>
                </Quiz>
            </CardDeck>
            <FooterNav/>
            {renderRedirect()}
        </Board>
    )
}

export default Game1
