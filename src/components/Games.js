import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Nav from './Nav'

import suma from '../media/suma.png'
import resta from '../media/resta.png'
import division from '../media/division.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    marginLeft:20,
    marginRight:20
    // padding: 112
  },
  media: {
    height: 140,
  },
  grid:{
    display:"flex",
    alignItems:"center"
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
      {/* <Nav name = "walter"/>  TODO*/}
      <Grid container className= {classes.grid}>
        <Card className={classes.root}>
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
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
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
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.root}>
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
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          


      </Grid>
    </div>
  );
}
