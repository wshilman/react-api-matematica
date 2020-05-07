import React from 'react';
import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import correct from '../../media/correct.png'
import './Game2.css';


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
            <h1 style={{marginTop:"40%"}}>{props.text}</h1>
        </div>
    )
}

const Target = props => {
    let {target,setProgress,progress} = props.pack
    const value = props.text;
    const [passed, setPassed] = useState(false);



    const handleDrop = () => {
            if((value == target) && !passed){
                setProgress(progress +1);
                setPassed(true);

            }
    }
    
    const setCard = (isOver) => {
        if(!passed){
            return(
                <h1 style={{marginTop:"40%",
            color:isOver ? "green" : "black"}}>{value}</h1>
            )
            
        }else{
            return(
                <img className="img" src={correct}></img>
                // <h1 style={{marginTop:"40%",
                //     color: "black",
                //     opacity:0.1}}>{value}</h1>
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



