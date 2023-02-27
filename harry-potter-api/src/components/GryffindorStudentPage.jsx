import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export default function GryffindorStudentPage(props) {

    const [character, setCharacter] = useState('')

    let { index } = useParams()

    useEffect(() => {
        let selectedCharacter = props.characters[index]
        setCharacter(selectedCharacter)
    }, [])

    return (
        <div className="smallGryffindorCard">
            <div>
                <img src={character.image} id="single-image" />
            </div>
            <div className="info">
                <h1>{character.name}</h1>
                <h3>House: {character.house}</h3>
                <h3>Gender: {character.gender}</h3>
                <h3>Date of Birth: {character.dateOfBirth}</h3>
            </div>
        </div>
    )
}