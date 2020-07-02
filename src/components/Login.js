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
import ApiRest from "../services/ApiRest";
import Alert from "../services/Alert";
import History  from '../services/History';


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


const isComplete = (value)=>{
  return value && value.trim().length;
}

const Login = props =>{
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [classroom, setClassroom] = useState("");
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const classes = useStyles();

  const handleClick = event =>{
    event.preventDefault();
    if (isComplete(name) && isComplete(lastname) && isComplete(classroom)){
      let data = {name,lastname,classroom};
      
      ApiRest.login(data)
      .then(response => {
        //localStorage.setItem('id', );
        console.log("LOGIN RESPONSE",response);
        localStorage.setItem("id",response.data._id);
        ApiRest.startGame(response.data._id).then(play=>{
          localStorage.setItem('play', play);
          localStorage.setItem('name', name);
          localStorage.setItem('lastname', lastname);
          localStorage.setItem('classroom', classroom);
          setLogin(true);
        });
        
      })
      .catch(e => {
        Alert.error({message:`Oops intenta de nuevo`});
        console.error(e);
      });
    }else{
      let errors = [];
      if(!isComplete(name)){
        errors.push("tu nombre");
      }else if(!isComplete(lastname)){
        errors.push("tu apellido");
      }else if(!isComplete(classroom)){
        errors.push("el salon");
      }
      Alert.error({message: errors.split("\n") });
    }
  }

  const handleChangeValue = (event, input) =>{
    if (input === "name") {
      setName(event.target.value);
    }else if(input === "lastname" ){
      setLastname(event.target.value);
    }else if(input === "classroom"){
      setClassroom(event.target.value);
    }
  }

  const handleLogon = () => {
    History.push('/juegos');
    return(<Redirect to='/juegos'> </Redirect>);
  }
  

  return ( login ?( handleLogon() ):(
    <div className={classes.image}>
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      
      <div className={classes.paper}>
        <Container>
          <img height="200" width="300" alt = "icono" src={require("../media/matematicas.png")}></img>
        </Container>
        <Typography component="h1" variant="h4" className={classes.text}>
          Hola! Complet&aacute; tus datos.
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nombre"
            name="name"
            autoFocus
            onChange={(event) =>handleChangeValue(event, "name")}
            className={classes.input}
            value={name}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="lastname"
            label="Apellido"
            id="lastname"
            onChange={(event) =>handleChangeValue(event, "lastname")}
            value={lastname}
            className={classes.input}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="classroom"
            label="Salon"
            id="classroom"
            onChange={(event) =>handleChangeValue(event, "classroom")}
            value={classroom}
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
    </div>
  ));

}

export default Login;