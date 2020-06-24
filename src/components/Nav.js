import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

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
        height: "60px",
        minHeight:"40px",
        backgroundColor:"#ffc10778",
        color:"#FF5722",
        padding:"20px"
    },
    divs:{
        float:'left',
        width:'34%'
    }
});

const Nav = ()=>{
    const classes = useStyles();
    const nombre = localStorage.getItem('nombre');
    const handleClick = () => {
        localStorage.removeItem('nombre');
        window.location.reload();  
    }
    
    /**
     * 
     * 
     * 
     * 
     */
    return(
        <div>
            {nombre &&
            <div className={classes.nav}>
                <div className={classes.divs}>
                    <h1 className={classes.text} >Hola: {nombre}! </h1>

                </div>
                <div className={classes.divs}>
                    <Button className={classes.button} onClick={()=>{handleClick()}}> Cerrar Sesion</Button>
                </div>
            </div>}
        </div>
    );
}

export default Nav;
