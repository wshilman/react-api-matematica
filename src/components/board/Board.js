import React from 'react'
import './Board.css';
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
        backgroundColor: "rgba(158, 158, 158, 0.22)",
        // alignItems: "center",

        height: "auto",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        padding:"20px"
        // margin: "0 auto",
        //marginLeft: "15%"
    }
  });
const Board = props => {
    const classes = useStyles();
    const style = props.style??{};
    return (
        <div className={classes.board} >
            <Grid container className={classes.container} style={style}>
                {props.children}
            </Grid>
        </div>

    )
}

export default Board
