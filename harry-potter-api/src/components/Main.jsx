import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './Home'
import Characters from './Characters'
import Spells from './Spells'
import Other from './Other'
import Hogwarts from './Hogwarts'

export default function Main() {
    const [characters, setCharacters] = useState([])
    const [spells, setSpells] = useState([])

    useEffect(() => {
        const getCharacters = async () => {
            const response = await axios.get('https://hp-api.onrender.com/api/characters')
            setCharacters(response.data) 
            console.log(response.data)
        }
        const getSpells = async () => {
            const response = await axios.get('https://hp-api.onrender.com/api/spells')
            setSpells(response.data)
        }
        getCharacters()
        getSpells()
    }, [])

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Characters" element={<Characters characters={characters}/>} />
                <Route path="/Other" element={<Other />} />
                <Route path="/Hogwarts" element={<Hogwarts />} />
                <Route path="/Spells" element={<Spells spells={spells}/>} />
            </Routes>
        </div>
    )
}