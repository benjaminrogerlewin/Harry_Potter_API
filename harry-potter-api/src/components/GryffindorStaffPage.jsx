import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export default function GryffindorStaffPage(props) {

    const [character, setCharacter] = useState('')

    let { index } = useParams()

    useEffect(() => {
        let selectedCharacter = props.characters[index]
        setCharacter(selectedCharacter)
    }, [])

    if (character.image && character.dateOfBirth !== null) {
        return (
            <div>
                <div className="details-btn">
                    <Link to="/Characters/Hogwarts/Gryffindor/staff"><button className="back-btn">Back</button></Link>
                </div>
                <div className="smallGryffindorCard">
                    <div className="infoCard">
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
                </div>
            </div>
        )
    } else if (character.image && character.dateOfBirth === null) {
        return (
            <div className="smallGryffindorCard">
                <div className="details-btn">
                    <Link to="/Characters/Hogwarts/Gryffindor/staff"><button className="back-btn">Back</button></Link>
                </div>
                <div className="infoCard">
                    <div>
                        <img src={character.image} id="single-image" />
                    </div>
                    <div className="info">
                        <h1>{character.name}</h1>
                        <h3>House: {character.house}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Date of Birth: Unknown</h3>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="smallGryffindorCard">
                <div className="details-btn">
                    <Link to="/Characters/Hogwarts/Gryffindor/staff"><button className="back-btn">Back</button></Link>
                </div>
                <div className="infoCard">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5E3CX1jPdj1-Ohjs70JKjebmO0xe6Zkemw&usqp=CAU" id="single-image" />
                    </div>
                    <div className="info">
                        <h1>{character.name}</h1>
                        <h3>House: {character.house}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Date of Birth: Unknown</h3>
                    </div>
                </div>
            </div>
        )
    }
}