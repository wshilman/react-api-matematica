import React, {useState, useEffect,Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import History from '../services/History';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';



import suma from '../media/sumas_y_restas.png'
import resta from '../media/alimenta_cerdito.png'
import division from '../media/paint.png'

const icons = [suma,resta,division];

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    marginLeft:"14%",
    alignItems:"center",
    marginBottom: 15,
    height: 400,
    background:"none!important",
    boxShadow: "none!important"
  },
  media: {
    height: 200,
    borderRadius: "50%"
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
  },
  text:{
    padding:0
  }
});

const Games = props =>{
  const [redirect, setRedirect] = useState(false);

  const classes = useStyles();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      axios(
        'http://localhost:8000/game',
      ).then((result)=>{
        console.log(result);
          setData(result.data);
          setLoading(loading => false);
      }).catch(()=>{

      });
    }, []);


  const handleClick = (idJuego) => {
    localStorage.setItem('idJuego', idJuego);
    setRedirect(true);
  }

  const renderRedirect = () => {
    if(!localStorage.getItem('name')){
      return(<Redirect to='/'></Redirect>)
    }

    if(redirect){
      History.push('/niveles');
      console.log(History);
      return(<Redirect to='/niveles'></Redirect>)
    }
  }
  
  function GameList(props) {
    const games = props.games;
    console.log(games);
    const listItems = games.map((data,index) =>
        // Correcto! La key debería ser especificada dentro del array.
        <Card game={index+1} className={classes.card} onClick={()=>{handleClick(index+1)}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={icons[index]}
            title={data.name}
          />
          <CardContent className={classes.text}>
            <Typography gutterBottom variant="h5" component="h2" style={{fontWeight: "600"}}>
              {data.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" >
              <span style={{fontWeight: "800"}}>{data.description}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>  
    );
    return (
        <Fragment>
            {listItems}
        </Fragment>
    );
}


  return (
    <div className={classes.container}>
      {loading
            ?
            <div>
                <Box width={1} maxWidth="sm" style={{ padding:"20px"}}>
                    <LinearProgress />
                </Box>
            </div>
            :
            <Grid container className= {classes.grid}>
              <GameList games={data}></GameList>
            </Grid>
      }

      {renderRedirect()}
    </div>



  );
}


export default Games;
