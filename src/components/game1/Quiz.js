import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import ApiRest from "../../services/ApiRest";

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import './Game1.css';

import iconStale from '../../media/stale.png';
import iconOk from '../../media/ok.png';
import iconError from '../../media/error.png';
import Alert from "../../services/Alert";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(15),
    marginLeft:90,
    minWidth:200
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));


const Quiz = props => {

  // TODO
  // USAR EL LVL DEL LOCALSTORAGE
  let {
    n1,
    n2,
    operation,
    options
  } = props.data
  const setProgress = props.setProgress;
  const progress = props.progress;
  const finishProgress = props.finishProgress;
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [won, setWon] = React.useState(false);
  const [sendRta, setSendRta] = React.useState(false);
  const nivel = localStorage.getItem('idLvl');
  const lvl = nivel;
  const handleRadioChange = (event) => {
    // localStorage.clear()
    setValue(event.target.value);
    setError(false);
  };

  const handlePoints = (points) => {
    // pointsGame1Lvl1
    const now = localStorage.getItem(`pointsGame1Lvl${lvl}`)
    now ? localStorage.setItem(`pointsGame1Lvl${lvl}`, parseInt(now) + points):localStorage.setItem(`pointsGame1Lvl${lvl}`,points)
    console.log(localStorage.getItem(`pointsGame1Lvl${lvl}`))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let ok = 0;
    let error = 0;
    
    if (value === 'right' && !won) {
      setError(false);
      setProgress(progress + 1)
      setWon(true)
      setSendRta(true);
      handlePoints(10);
    } else if (value === 'right') {
      setProgress(progress + 1)
      handlePoints(10);
      setError(false);
      setSendRta(true);
    } else if (value === 'bad1' || 'bad2' || 'bad3' || 'bad4') {
      setProgress(progress + 1)
      handlePoints(0)
      setError(true);
      setSendRta(true);
    } else {
      setError(true);
    }
    console.log("Progress ",progress);
    let puntaje = localStorage.getItem(`pointsGame1Lvl${lvl}`)
      if(progress === finishProgress){
        if(puntaje==0){
          Alert.tryAgain();
        }else{
          let player = localStorage.getItem("id");
          let game = localStorage.getItem("idJuego");
          ApiRest.saveScore({id:player,level:nivel,game,points:puntaje})
          .then((config)=>{
            console.log("Score Saved!");
          }).catch((e)=>{
            Alert.error({message:`Oops! No se pudo guardar tu puntaje`});  
            console.log(e);
          });
          Alert.finishLevel({puntaje,level:nivel,route:"juego1"});
        }
    }
  };

  return (
    <Card style={{maxHeight: "500px"}} border={ won?'success': error?"danger":"light"} >
      {props && 
        <form onSubmit={handleSubmit}>
          <Card.Img variant="top" style={{width: "50px",paddingTop:"10px"}} src={ won?iconOk: error?iconError:iconStale} />
          <Card.Body>
            <Card.Title>
              <CardDeck>
                <Card style={{ width: '18rem' }}>
                  <Card.Body style={{ padding: '10px' }}>
                    {n1}
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Body style={{ padding: '10px' }}>
                    {operation}
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Body style={{ padding: '10px' }}>
                    {n2}
                  </Card.Body>
                </Card>
              </CardDeck>
            </Card.Title>
            <Card.Text>
            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange} style={{marginTop:10}}>
              {options.map((op,index)=>
                <FormControlLabel value={op.right? "right": "bad"+index}  disabled={sendRta} control={<Radio />} label={op.rta} />
              )}
              
            </RadioGroup>

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button type="submit" disabled={sendRta} variant="outlined" color="primary" className={classes.button}>
              Enviar Respuesta
            </Button>
          </Card.Footer>
        </form>}
     
    </Card>
  )

  
}


export default Quiz