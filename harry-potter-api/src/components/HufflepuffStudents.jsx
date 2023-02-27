import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function HufflepuffStudents(props) {

    let navigate = useNavigate()

    const showCharacter = (index) => {
        navigate(`${index}`)
    }

    return (
        <div>
            <div>
                <h1>Hufflepuff Students</h1>
            </div>
            <div className="character-grid">
            {
                props.characters.map((character, index) => {
                if (character.house === 'Hufflepuff' && character.hogwartsStudent && character.image) {
                    return (
                    <div className="characterCard" key={index} onClick={() => showCharacter(index)}>
                        <img src={character.image} />
                        <h3>{character.name}</h3>
                    </div>
                    )
                } else if (character.house === 'Hufflepuff' && character.hogwartsStudent && !character.image) {
                    return (
                        <div className="characterCard" key={index} onClick={() => showCharacter(index)}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5E3CX1jPdj1-Ohjs70JKjebmO0xe6Zkemw&usqp=CAU" />
                            <h3>{character.name}</h3>
                        </div>
                        )
                }
                })
            }
            </div>
        </div>
    )
}