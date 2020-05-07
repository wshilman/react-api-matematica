import React, {useState} from "react";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    text:{
        fontSize: 25,
        textAlign:"left",
        marginLeft: 5,
        marginBottom:-10
    },
    nav:{
        height: 35,
        backgroundColor:"#1876D2",
    }
});

const Nav = ({nombre})=>{
    const classes = useStyles();

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
