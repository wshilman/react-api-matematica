import React, {useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Component } from 'react';

class Games extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name : ""
        }
      }

    render(){

        return(
            <div style={{height: 35,
                backgroundColor:"#1876D2",
                marginTop:-25,
                marginBottom:5}}>
                    <h1>Iniciado como: ${this.state.name}</h1>
                    

            </div>
        );
    }
}

export default new Games();
