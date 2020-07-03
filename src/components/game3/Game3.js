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




import CardDeck from 'react-bootstrap/CardDeck'
import { Redirect, Link } from 'react-router-dom';



const Game3 = () => {
    const [ progress, setProgress] = useState(0);
    const [ data, setData] = useState([]);
    const manageData = (lvl) => {
        if (lvl === '1'){
            return({
                pack1 : {
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
                    lvl:1
                },
                pack2 : {
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
                    lvl:1
                },
                pack3 : {
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
                    lvl:1
                }
            }
            )
        }else if (lvl === '2'){
            return({
                pack1 : {
                    n: 1,
                    quest: "3 * 9",
                    n1: 3,
                    operation: "*",
                    n2: 9,
                    r1: 29,
                    r2: 27,
                    r3: 24,
                    r4: 120,
                    right:2,
                    setProgress:setProgress,
                    progress:progress,
                    lvl:2
                },
                pack2 : {
                    n:2,
                    quest:"2 * 6",
                    n1:23,
                    operation:"*",
                    n2:6,
                    r1: 12,
                    r2: 11,
                    r3: 36,
                    r4: 10,
                    right: 1,
                    setProgress:setProgress,
                    progress:progress,
                    lvl:2
                },
                pack3 : {
                    n:3,
                    quest:"9 * 8",
                    n1:9,
                    operation:"*",
                    n2: 8,
                    r1: 56,
                    r2: 61,
                    r3: 72,
                    r4: 129,
                    right:3,
                    setProgress:setProgress,
                    progress:progress,
                    lvl:2
                }
            }
            )
        }else {
            return({
                pack1 : {
                    n:1,
                    quest:"7 * 11",
                    n1: 7,
                    operation:"*",
                    n2: 11,
                    r1: 77,
                    r2: 71,
                    r3: 80,
                    r4: 2001,
                    right:1,
                    setProgress:setProgress,
                    progress:progress,
                    lvl:3
                },
                pack2 : {
                    n:2,
                    quest:"5 * -7",
                    n1: 5,
                    operation:"*",
                    n2: -7,
                    r1:  -56,
                    r2: -15,
                    r3: 35,
                    r4: -35,
                    right: 4,
                    setProgress:setProgress,
                    progress:progress,
                    lvl:3
                },
                pack3 : {
                    n:3,
                    quest:"25 / 5",   
                    n1:25,
                    operation:"/",
                    n2:5,
                    r1: 10,
                    r2: 5,
                    r3: -3,
                    r4: 15,
                    right: 2,
                    setProgress:setProgress,
                    progress:progress,
                    lvl:3
                }
            }
            )
        }
        
        
    }
    const nivel = localStorage.getItem('idLvl');
    const handlePoints = (points) => {
        // pointsGame1Lvl1
        const now = localStorage.getItem(`pointsGame3Lvl${nivel}`)
        now ? localStorage.setItem(`pointsGame3Lvl${nivel}`, parseInt(now) + points):localStorage.setItem(`pointsGame3Lvl${nivel}`,points)
        console.log(localStorage.getItem(`pointsGame3Lvl${nivel}`))
    }

    const packs = manageData(localStorage.getItem('idLvl'))
    
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios(
            'http://localhost:8000/game/painting/level/'+localStorage.getItem('idLvl'),
        ).then((result)=>{
            console.log(result);
            setData(result.data);
            setLoading(loading => false);
        }).catch(()=>{
            
        });
    }, []);
        
    const renderRedirect = () => {
        if(!localStorage.getItem('name')){
          return(<Redirect to='/'></Redirect>)
        }
      }

    
      const handleClickCheck = ()=>{
        console.log(data);
        console.log();
        let ok = 0;
        let error = 0;
        var totalRta = 0;
        
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
        let point = 10;
        if(nivel==2){
            point=20;
        }else{
            point=30;
        }
        let finishLevel = localStorage.getItem('idLvl')==3;
        let puntaje = (ok*point)+"/"+(totalRta*point);
        handlePoints(puntaje);
        if(finishLevel){
            Alert.finishLevel({puntaje});
        }else{
            let nextLevel =localStorage.getItem('idLvl');
            nextLevel++;
            Alert.finishLevel({puntaje,level:nextLevel,next:"juego3"});
        }
        
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
                <Quiz pack={packs.pack1} data={data} setData={setData}>
                </Quiz>
            </CardDeck>
            <div style={{marginLeft: "auto",marginRight: "auto",paddingTop:20}}>
            <Button
                    variant="outlined"
                    color="default"
                    size="large"
                    style={{marginLeft: "auto",marginRight: "auto",background: "#fde19b"}}
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
