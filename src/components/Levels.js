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
import n1 from '../media/n1.png'
import n2 from '../media/n2.png'
import n3 from '../media/n3.png'


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

const Levels = () =>{
    
    const classes = useStyles();

    return(
            <div className={classes.container}>
      <Grid container className= {classes.grid}>
        <Card className={classes.card} >
        <Link to='/nivel1' style={{ textDecoration: 'none' }}>

          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={n1}
              title="Nivel 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Nivel 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Esta es la descripcion del Nivel 1
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        </Card>
        
        <Card className={classes.card}>
        <Link to='/nivel2' style={{ textDecoration: 'none' }}>
          <CardActionArea>
              <CardMedia
                className={classes.media}
                image={n2}
                title="Nivel 2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Nivel 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Esta es la descripcion del Nivel 2
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
                    image={n3}
                    title="Nivel 3"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nivel 3
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Esta es la descripcion del Nivel 3
                    </Typography>
                  </CardContent>
                </CardActionArea>
            </Link>

                
          </Card>



      </Grid>
        </div>
    )
}

export default Levels;
