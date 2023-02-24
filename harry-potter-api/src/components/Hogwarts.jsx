import { Link } from "react-router-dom"

export default function Hogwarts() {
    return (
        <div>
            <Link to="/Gryffindor"></Link>
            <Link to="/Ravenclaw"></Link>
            <Link to="/Hufflepuff"></Link>
            <Link to="/Slytherin"></Link>
        </div>
    )
}