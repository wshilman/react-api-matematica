import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import './Game1.css';


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
    } else if (value === 'right') {
      setHelperText('Correcto!');
      setError(false);

    } else if (value === 'bad1' || 'bad2' || 'bad3' || 'bad4') {
      setHelperText('Respuesta incorrecta!');
      setError(true);
    } else {
      setHelperText('Elegí una opción!');
      setError(true);
    }
  };

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
  );

  
}


export default Quiz