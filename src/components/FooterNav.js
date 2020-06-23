import React, {useState} from "react";

import Grid from '@material-ui/core/Grid';
import { Link, Redirect } from 'react-router-dom';

import iconNext from '../media/next.png';
import iconPrev from '../media/prev.png';


const FooterNav = ({nombre})=>{

    return (
        <Grid container spacing={3} style={{paddingTop:"20px"}}>
            <Grid item xs={6}>
                <Link to='/juegos' style={{ textDecoration: 'none' }}>
                    <img src={iconPrev} style={{width:"80px",cursor:"pointer"}} alt="Previo"/>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <Link to='/nivel2' style={{ textDecoration: 'none' }}>
                    <img src={iconNext} style={{width:"80px",cursor:"pointer"}} alt="Proximo"/>
                </Link>
            </Grid>
        </Grid>
    );
}

export default FooterNav;