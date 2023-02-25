import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Other(props) {
    
    let navigate = useNavigate()

    const showCharacter = (index) => {
        navigate(`${index}`)
    }

    return (
        <div>
            <div>
                <h1>Other</h1>
            </div>
            <div>
            {
                props.characters.map((character, index) => {
                if (character.house === '') {
                    return (
                    <div className="otherCard" key={index} onClick={() => showCharacter(index)}>
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