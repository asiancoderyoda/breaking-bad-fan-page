import React, { useState } from 'react';
import '../App.css';

const Searcher = ({ getQuary }) => {

    const [text, setText] = useState("")

    const onChange = (q) => {
        setText(q)
        getQuary(q)
    }

    return (
        <form >
            <input type="text" className="search-form" placeholder="Search Characters" value={text} onChange={(e) => onChange(e.target.value)} autoFocus />
        </form>
    )
}

export default Searcher
