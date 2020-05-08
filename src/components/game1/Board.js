import React from 'react'
import './Game1.css';
import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    board:{
        height: "100%",
        width: "100%",
        marginTop: "25px",
        position: "relative",
        alignItems: "center",

    },
    container:{
        backgroundColor: "rgb(51, 145, 82)",
        // alignItems: "center",

        height: "120%",
        width: "70%",
        // margin: "0 auto",
        marginLeft: "15%"
    }
  });
const Board = props => {
    const classes = useStyles();

    return (
        <div className={classes.board}>
            <Grid container className={classes.container}>
                {props.children}
            </Grid>
        </div>

    )
}

export default Board
