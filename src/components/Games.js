import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import Nav from './Nav'
import suma from '../media/suma.png'
import resta from '../media/resta.png'
import division from '../media/division.png'

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    marginLeft:"14%",
    alignItems:"center",
    marginBottom: 15
  },
  media: {
    height: 140,
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

const Games = props =>{
  let { nombre, setTopic } = props

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container className= {classes.grid}>
        <Card className={classes.card} >
        <Link to='/niveles' style={{ textDecoration: 'none' }}>

          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={suma}
              title="Juego 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Juego 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Esta es la descripcion del juego 1
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        </Card>
        
        <Card className={classes.card}>
        <Link to='/niveles' style={{ textDecoration: 'none' }}>
          <CardActionArea>
              <CardMedia
                className={classes.media}
                image={resta}
                title="Juego 2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Juego 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Esta es la descripcion del juego 2
                </Typography>
              </CardContent>
            </CardActionArea>
            </Link>
          </Card>

          <Card className={classes.card}>
            <Link to='/niveles' style={{ textDecoration: 'none' }}>            
              <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={division}
                    title="Juego 3"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Juego 3
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Esta es la descripcion del juego 3
                    </Typography>
                  </CardContent>
                </CardActionArea>
            </Link>

                
          </Card>



      </Grid>
    </div>
  );
}


export default Games;
