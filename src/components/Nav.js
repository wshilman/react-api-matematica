import React, {useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Component } from 'react';

const Nav = ({nombre})=>{
    return(
        <div>
            {
        nombre && 
        <div style={
            {height: 35,
            backgroundColor:"#1876D2",
            marginTop:-20,
            marginBottom:0}
        }>
                <h1>Iniciado como: {nombre}</h1>
        </div>}
        </div>
    );
}

export default Nav;
