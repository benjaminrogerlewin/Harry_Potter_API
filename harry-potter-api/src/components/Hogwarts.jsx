import { Link } from "react-router-dom"

export default function Hogwarts() {

    return (
        <div>
           <h1>Houses</h1>
           <Link to="/Characters/Hogwarts/Gryffindor">Gryffindor</Link>
           <Link to="/Characters/Hogwarts/Ravenclaw">Ravenclaw</Link>
           <Link to="/Characters/Hogwarts/Hufflepuff">Hufflepuff</Link>
           <Link to="/Characters/Hogwarts/Slytherin">Slytherin</Link>
        </div>
    )
}