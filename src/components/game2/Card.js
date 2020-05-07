import React from 'react';
import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { useState }from 'react';
import { red } from '@material-ui/core/colors';


const ItemTypes = {
    SOURCE: 'source',
    TARGET: 'target',
  }

const Source = props => {

    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.SOURCE },
            collect: monitor => ({
                isDragging: !!monitor.isDragging(),
            }),
      })

    return (
        <div className={props.class}
        ref={drag}
        style={{
            opacity: isDragging ? 0.5 : 1,
            cursor:"move"}}>
            <h1>{props.text}</h1>
        </div>
    )
}

const Target = props => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.SOURCE,
        drop: () => console.log("me soltaste222"),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
          }),
      })

    return (
        <div className={props.class}
        ref={drop}>
            <h1 style={{color: isOver ? "green" : "black"}}>{props.text}</h1>
            
        </div>
    )
}

export {Source, Target}



