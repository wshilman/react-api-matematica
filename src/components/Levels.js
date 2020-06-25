import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Link, Redirect} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import History  from '../services/History';



import n1 from '../media/level1.png'
import n2 from '../media/level2.png'
import n3 from '../media/level3.png'



const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    marginLeft:"14%",
    alignItems:"center",
    marginBottom: 15,
    backgroundColor:"#ffffff1c"
  },
  media: {
    height: 160,
  },
  grid:{
    display:"flex",
    alignItems:"center",
    height:"100%",
    width:"100%"
  },
  container:{
    marginTop:"12%",
    alignItems:"center",
  }
});

const renderRedirect = () => {
  if(!localStorage.getItem('name')){
    return(<Redirect to='/'></Redirect>)
  }
}

const handleGame = () => {
  const juego = localStorage.getItem('idJuego');
  return(`/juego${juego}`);
}

const handleClick = (idLvl) => {
  localStorage.setItem('idLvl', idLvl)
}



const Levels = (props) =>{
    
    const classes = useStyles();

    return(
            <div className={classes.container}>
      <Grid container className= {classes.grid}>
        <Card className={classes.card} >
        <Link onClick={()=>{handleClick(1)}} to={handleGame()} style={{ textDecoration: 'none' }}>

          <CardActionArea style={{minWidth: "200px"}}>
            <CardMedia
              className={classes.media}
              image={n1}
              title="Nivel 1"
            />
            <CardContent>
            </CardContent>
          </CardActionArea>
        </Link>
        </Card>
        
        <Card className={classes.card}>
        <Link onClick={()=>{handleClick(2)}} to={handleGame()} style={{ textDecoration: 'none' }}>
            <CardActionArea style={{minWidth: "200px"}}>
              <CardMedia
                className={classes.media}
                image={n2}
                title="Nivel 2"
              />
              <CardContent>
              </CardContent>
            </CardActionArea>
            </Link>
          </Card>

          <Card className={classes.card}>
            <Link onClick={()=>{handleClick(3)}} to={handleGame()} style={{ textDecoration: 'none' }}>            
                <CardActionArea style={{minWidth: "200px"}}>
                  <CardMedia
                    className={classes.media}
                    image={n3}
                    title="Nivel 3"
                  />
                  <CardContent>
                  </CardContent>
                </CardActionArea>
            </Link>

          </Card>

      </Grid>
      {renderRedirect()}
        </div>
    )
}

export default Levels;
