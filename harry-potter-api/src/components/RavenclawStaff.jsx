import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function RavenclawStaff(props) {

    let navigate = useNavigate()

    const showCharacter = (index) => {
        navigate(`${index}`)
    }

    return (
        <div>
            <div>
                <h1>Ravenclaw Staff</h1>
            </div>
            <div>
            {
                props.characters.map((character, index) => {
                if (character.house === 'Ravenclaw' && character.hogwartsStaff) {
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