import React, {useState} from "react";

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height: "auto",
        minHeight:"40px",
        backgroundColor:"#ffc10778",
        color:"#FF5722",
        padding:"20px"
    },
    text:{
        fontSize: 25,
        textAlign:"left",
        marginLeft: 5,
        marginBottom:-10,
    },
    nav:{
        height: "auto",
        minHeight:"40px",
        backgroundColor:"#ffc10778",
        color:"#FF5722",
        padding:"20px"
    }
});

const Nav = ({nombre})=>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs>
                {nombre &&
                        <h1 className={classes.text}>Soy: {nombre}! </h1>
                }
            </Grid>
            <Grid item xs>
                <Typography variant="h4" component="h2" style={{
                        float: "right",
                        cursor: "pointer",
                }}>
                    Puntajes
                </Typography>
            </Grid>
          </Grid>
        </div>
    );
}

export default Nav;
