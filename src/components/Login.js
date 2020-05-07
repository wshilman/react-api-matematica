import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  text: {
    color:"#4054B5"
  }
}));



const Login = props =>{
  let { nombre, setNombre, apellido, setApellido } = props;

  const [nombreValue, setNombreValue] = useState("");
  const [apellidoValue, setApellidoValue] = useState("");

  const classes = useStyles();

  const handleClick = event =>{
    event.preventDefault();
    setNombre(nombreValue);
    setApellido(apellidoValue);
  }

  const handleChangeName = (event, input) =>{
    if (input === "nombre") {
    setNombreValue(event.target.value);
      
    }else{
      setApellidoValue(event.target.value);
    }
  }

  return (
    <div className={classes.image}>
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img height="42" width="42" alt = "icono" src={require("../media/avatar.jpg")}></img>
        </Avatar>
        <Typography component="h1" variant="h4" className={classes.text}>
          Entrar al juego!
        
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nombre"
            label="Nombre"
            name="nombre"
            autoFocus
            onChange={(event) =>handleChangeName(event, "nombre")}
            value={nombreValue}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="apellido"
            label="Apellido"
            id="apellido"
            onChange={(event) =>handleChangeName(event, "apellido")}
            value={apellidoValue}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(ev)=>handleClick(ev)}
            component = {Link}
            to= "/juegos"
          > Ingresar
          </Button>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
    {nombre && <Redirect to='/juegos' />}
    </div>
  );

}

export default Login;