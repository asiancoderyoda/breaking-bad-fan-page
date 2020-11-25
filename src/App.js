import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Header from "./components/Header";
import Searcher from "./components/Searcher";
import CharacterGrid from "./components/CharacterGrid";




const App = () => {

  const [items, setItems] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
        )

        // console.log(result.data)
      setItems(result.data)

    }
    fetchItems()
  }, [query]);




  return (
    <div className="container">
      <Header />
      <Searcher getQuary= {(q) => setQuery(q)} />
      <CharacterGrid items={items} />
    </div>
  );
}

export default App;

