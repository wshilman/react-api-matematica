import React from 'react';
import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import correct from '../../media/cerdito_ok.png'
import './Game2.css';

import Alert from "../../services/Alert";
import pingImage from '../../media/cerdito.png';
import appleImage from '../../media/apple2.png';

const ItemTypes = {
    SOURCE: 'source',
    TARGET: 'target',
  }

const Source = props => {
    const id = props.id;
    const setTarget = props.setTarget;


    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.SOURCE },
            collect: monitor => ({
                isDragging: !!monitor.isDragging(),
            }),
      })
      
    const handleState = () => {
        if(isDragging){
            setTarget(id)
        }
    }
    

    return (
        <div className={props.class}
        ref={drag}
        style={{
            opacity: isDragging ? 0.5 : 1,
            cursor:"move"}}>
                {handleState()}
                <div>
                    <div className="appleMountContainer">
                        <div className="mount" style={{left:"15px"}}>
                            {props.text}
                        </div>
                    </div>
                    <img src={appleImage} class="img"/>
                </div>
        </div>
    )
}

const Target = props => {
    let {target,setProgress,progress,removePoints,avanzar} = props.pack
    const value = props.text;
    const operation = props.operation;
    const [passed, setPassed] = useState(false);



    const handleDrop = () => {
            if((value == target) && !passed){
                //setProgress(progress +1);
                avanzar();
                setPassed(true);

            }else{
                removePoints();
            }
    }
    
    //<h1 style={{marginTop:"40%",color:isOver ? "green" : "black"}}>{value}</h1>
    const setCard = (isOver) => {
        if(!passed){
            return(
                <div className="containerPig">
                    <div className="containerMount">
                        <div className="mount">
                            {value}  
                        </div>
                    </div>
                    <img src={pingImage} class="img"/>
                </div>
            )
            
        }else{
            return(
                <div className="containerPig">
                    <div className="containerMount">
                        <div className="mount" style={{fontSize: "larger"}}>
                            {operation} = {value}
                        </div>
                    </div>
                    <img src={correct} class="img"/>
                </div>
            )
        }
        
        
    }
    


    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.SOURCE,
        drop: () => handleDrop(),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
          }),
      })

    return (
        <div className={props.class}
        ref={drop}>
            {setCard()}
        </div>
    )
}

export {Source, Target}



