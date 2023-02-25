import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export default function RavenclawStudentPage(props) {

    const [character, setCharacter] = useState('')

    let { index } = useParams()

    useEffect(() => {
        let selectedCharacter = props.characters[index]
        setCharacter(selectedCharacter)
    }, [])

    return (
        <div className="smallCard">
            <div className="info">
                <h1>{character.name}</h1>
            </div>
        </div>
    )
}