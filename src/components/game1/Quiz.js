import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import './Game1.css';

import iconStale from '../../media/stale.png';
import iconOk from '../../media/ok.png';
import iconError from '../../media/error.png';


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

  let { n,
     quest,
     n1,
     n2,
     operation,
     r1,
     r2,
     r3,
     r4,
     right,
     setProgress,
     progress


  } = props.pack;

  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Elegí una opcion');
  const [won, setWon] = React.useState(false);
  const [sendRta, setSendRta] = React.useState(false);


  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'right' && !won) {
      setHelperText('Correcto!');
      setError(false);
      setProgress(progress + 1)
      setWon(true)
      setSendRta(true);
    } else if (value === 'right') {
      setHelperText('Correcto!');
      setError(false);
      setSendRta(true);
    } else if (value === 'bad1' || 'bad2' || 'bad3' || 'bad4') {
      setHelperText('Respuesta incorrecta!');
      setError(true);
      setSendRta(true);
    } else {
      setHelperText('Elegí una opción!');
      setError(true);
    }
  };

  return (
    <Card style={{maxHeight: "450px"}} border={ won?'success': error?"danger":"light"} >
      <form onSubmit={handleSubmit}>
        <Card.Img variant="top" style={{width: "50px",paddingTop:"10px"}} src={ won?iconOk: error?iconError:iconStale} />
        <Card.Body>
          <Card.Title>
            <CardDeck>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  {n1}
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  {operation}
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  {n2}
                </Card.Body>
              </Card>
            </CardDeck>
          </Card.Title>
          <Card.Text>
          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange} style={{marginTop:10}}>
            <FormControlLabel value={right === 1 ? "right": "bad1"}  disabled={sendRta} control={<Radio />} label={r1} />
            <FormControlLabel value={right === 2 ? "right": "bad2"}  disabled={sendRta} control={<Radio />} label={r2} />
            <FormControlLabel value={right === 3 ? "right": "bad3"}  disabled={sendRta} control={<Radio />} label={r3} />
            <FormControlLabel value={right === 4 ? "right": "bad4"}  disabled={sendRta} control={<Radio />} label={r4} />
          </RadioGroup>

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button type="submit" disabled={sendRta} variant="outlined" color="primary" className={classes.button}>
            Enviar Respuesta
          </Button>
        </Card.Footer>
      </form>
     
    </Card>
  )

  /*
  return (
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" error={error} className={classes.formControl} style={{border: won? '5px double green': error?'5px double red':'5px double blue'}}>
          <FormLabel component="legend">{quest}</FormLabel>
          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange} style={{marginTop:10}}>
            <FormControlLabel value={right === 1 ? "right": "bad1"} control={<Radio />} label={r1} />
            <FormControlLabel value={right === 2 ? "right": "bad2"}  control={<Radio />} label={r2} />
            <FormControlLabel value={right === 3 ? "right": "bad3"}  control={<Radio />} label={r3} />
            <FormControlLabel value={right === 4 ? "right": "bad4"}  control={<Radio />} label={r4} />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Enviar Respuesta
          </Button>
        </FormControl>
      </form>
  );*/

  
}


export default Quiz