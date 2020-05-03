import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fondo from '../media/numbersLoginWallpaper.jpg'

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: `url(${Fondo})`,
    width: "auto",
    height : "auto"
  },
  paper: {
    marginTop: theme.spacing(8),
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
}));

const handleClick = (props) =>{
  console.log(props)
}

export default function SignIn() {
  const classes = useStyles();

  return (
    <div className = {classes.image}>
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img height="42" width="42" alt = "icono" src={require("../media/avatar.jpg")}></img>
        </Avatar>
        <Typography component="h1" variant="h4">
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
            name="apellido"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="apellido"
            label="Apellido"
            id="apellido"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            component = {Link}
            to= "/juegos"
          >
            Ingresar
          </Button>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
    </div>
  );
}