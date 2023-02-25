import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function HufflepuffStaff(props) {
    return (
        <div>
            <div>
                <h1>Hufflepuff Staff</h1>
            </div>
            <div>
            {
                props.characters.map((character) => {
                if (character.house === 'Hufflepuff' && character.hogwartsStaff) {
                    return (
                    <div>
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