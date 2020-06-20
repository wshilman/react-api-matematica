import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, Redirect } from 'react-router-dom';
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
    background: "rgba(234, 234, 244, 0.78)",
    radius: "2em",
    marginTop: "20px",
    border: "1px solid #ccc",
    borderRadius: "2em",
    padding: "20px"
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
  },
  input: {
    backgroundColor: "#f7f7ff"
  }
}));



const Login = props =>{
  const [nombreValue, setNombreValue] = useState("");
  const [apellidoValue, setApellidoValue] = useState("");

  const classes = useStyles();

  const handleClick = event =>{
    event.preventDefault();
    localStorage.setItem('nombre', nombreValue);
    localStorage.setItem('apellido', nombreValue);
    window.location.reload();
  }

  const handleChangeName = (event, input) =>{
    if (input === "nombre") {
    setNombreValue(event.target.value);
      
    }else{
      setApellidoValue(event.target.value);
    }
  }

  const handleLogon = () => {
    if (localStorage.getItem('nombre') != null){
      return(<Redirect to='/juegos'> </Redirect>);
    }
  }
  

  return (
    <div className={classes.image}>
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      
      <div className={classes.paper}>
        <Container>
          <img height="200" width="300" alt = "icono" src={require("../media/matematicas.png")}></img>
        </Container>
        <Typography component="h1" variant="h4" className={classes.text}>
          Yo soy!
        
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
            className={classes.input}
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
            className={classes.input}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(ev)=>handleClick(ev)}
            to= "/juegos"
            component = {Link}
          > Entrar
          </Button>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
    {handleLogon()}
    {/* {nombre && <Redirect to='/juegos' />} */}
    </div>
  );

}

export default Login;