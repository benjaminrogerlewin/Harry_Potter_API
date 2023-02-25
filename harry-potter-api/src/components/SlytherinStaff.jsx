import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function SlytherinStaff(props) {

    let navigate = useNavigate()

    const showCharacter = (index) => {
        navigate(`${index}`)
    }

    return (
        <div>
            <div>
                <h1>Slytherin Staff</h1>
            </div>
            <div>
            {
                props.characters.map((character, index) => {
                if (character.house === 'Slytherin' && character.hogwartsStaff) {
                    return (
                    <div className="staffCard" key={index} onClick={() => showCharacter(index)}>
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