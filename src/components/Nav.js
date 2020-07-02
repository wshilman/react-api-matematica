import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ApiRest from "../services/ApiRest";


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
    const nombre = localStorage.getItem('name');
    const handleClick = () => {
        localStorage.removeItem('name');
        window.location.reload();  
        /*ApiRest.logout(data)
        .then(response => {
          localStorage.setItem('name', name);
          localStorage.setItem('lastname', lastname);
          localStorage.setItem('classroom', classroom);
          console.log(response.data);
          setLogin(true);
        })
        .catch(e => {
          Alert.error({message:`Oops intenta de nuevo`});
          console.error(e);
        });*/
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
                <div className={classes.divs} style={{textAlign: "right",float: "right"}}>
                    <Button className={classes.button} onClick={()=>{handleClick()}}> Cerrar Sesion</Button>
                </div>
            </div>}
        </div>
    );
}

export default Nav;
