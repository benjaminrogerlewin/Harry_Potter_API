import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './Home'
import Characters from './Characters'
import Spells from './Spells'
import Other from './Other'
import Hogwarts from './Hogwarts'
import Gryffindor from './Gryffindor'
import GryffindorStudents from './GryffindorStudents'
import GryffindorStudentPage from './GryffindorStudentPage'
import GryffindorStaff from './GryffindorStaff'
import GryffindorStaffPage from './GryffindorStaffPage'
import Ravenclaw from './Ravenclaw'
import RavenclawStudents from './RavenclawStudents'
import RavenclawStaff from './RavenclawStaff'
import Hufflepuff from './Hufflepuff'
import HufflepuffStudents from './HufflepuffStudents'
import HufflepuffStaff from './HufflepuffStaff'
import Slytherin from './Slytherin'
import SlytherinStudents from './SlytherinStudents'
import SlytherinStaff from './SlytherinStaff'

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
            console.log(response.data)
        }
        getCharacters()
        getSpells()
    }, [])

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Characters" element={<Characters characters={characters}/>} />
                <Route path="/Characters/Other" element={<Other characters={characters}/>} />
                <Route path="/Characters/Hogwarts" element={<Hogwarts />} />
                <Route path="/Characters/Hogwarts/Gryffindor" element={<Gryffindor />} />
                <Route path="/Characters/Hogwarts/Gryffindor/Students" element={<GryffindorStudents characters={characters}/>} />
                <Route path="/Characters/Hogwarts/Gryffindor/Students/:index" element={<GryffindorStudentPage characters={characters}/>} />
                <Route path="/Characters/Hogwarts/Gryffindor/Staff" element={<GryffindorStaff characters={characters}/>} />
                <Route path="/Characters/Hogwarts/Gryffindor/Staff/:index" element={<GryffindorStaffPage characters={characters}/>} />
                <Route path="/Characters/Hogwarts/Ravenclaw" element={<Ravenclaw />} />
                <Route path="/Characters/Hogwarts/Ravenclaw/Students" element={<RavenclawStudents characters={characters}/>} />
                <Route path="/Characters/Hogwarts/Ravenclaw/Staff" element={<RavenclawStaff characters={characters}/>} />
                <Route path="/Characters/Hogwarts/Hufflepuff" element={<Hufflepuff />} />
                <Route path="/Characters/Hogwarts/Hufflepuff/Students" element={<HufflepuffStudents characters={characters}/>} />
                <Route path="/Characters/Hogwarts/Hufflepuff/Staff" element={<HufflepuffStaff characters={characters}/>} />
                <Route path="/Characters/Hogwarts/Slytherin" element={<Slytherin />} />
                <Route path="/Characters/Hogwarts/Slytherin/Students" element={<SlytherinStudents characters={characters}/>} />
                <Route path="/Characters/Hogwarts/Slytherin/Staff" element={<SlytherinStaff characters={characters}/>} />
                <Route path="/Spells" element={<Spells spells={spells}/>} />
            </Routes>
        </div>
    )
}