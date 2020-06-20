import React from "react";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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

const Nav = ()=>{
    const classes = useStyles();
    const nombre = localStorage.getItem('nombre');

    return(
        <div>
            {nombre &&
            <div className={classes.nav}>
                    <h1 className={classes.text}>Hola: {nombre}! </h1>
            </div>}
        </div>
    );
}

export default Nav;
