import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function SlytherineStudents(props) {

    let navigate = useNavigate()

    const showCharacter = (index) => {
        navigate(`${index}`)
    }

    return (
        <div>
            <div>
                <h1>Slytherin Students</h1>
            </div>
            <div>
            {
                props.characters.map((character, index) => {
                if (character.house === 'Slytherin' && character.hogwartsStudent) {
                    return (
                    <div className="studentCard" key={index} onClick={() => showCharacter(index)}>
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