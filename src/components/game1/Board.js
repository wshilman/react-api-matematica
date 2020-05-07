import React from 'react'

const Board = props => {

    const drop = ev => {
        ev.preventDefault();
        const cardId = ev.dataTransfer.getData('card_id');

        const card = document.getElementById(cardId)
        card.style.display = 'block';
        
        ev.target.appendChild(card);

    }


    const dragOver  = ev => {
        ev.preventDefault();
        
    }
    
    
    
    return (
        <div id={props.id}
        onDrop={drop}
        onDragOver={dragOver}
        >
            { props.children }
        </div>
    )
}

export default Board
