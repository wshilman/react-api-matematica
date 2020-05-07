import React from 'react'

const Card = props => {
    const dragStart = (ev) => {
        ev.preventDefault();
        const target = ev.target;

        ev.dataTransfer.setData('card_id',target.id)
        setTimeout((params) => {
             target.style.display = 'none';           
            }, 0);

        
    }

    const dragOver = ev => {
        ev.stopPropagation();
        
    }
    
    
    return (
        <div
        id={props.id}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
        
        >
            { props.children }
        </div>
    )
}

export default Card
