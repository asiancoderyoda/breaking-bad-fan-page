import React from 'react'
import '../App.css';
import CharacterDetails from "./CharacterDetails";

const CharacterGrid = ({items}) => {
    return (
        <section className="cardGrid">
            {items.map((item) => (
                <CharacterDetails key={items.char_id} item={item}></CharacterDetails>
            ))}
        </section>
    )
}

export default CharacterGrid;
