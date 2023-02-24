import { Link } from "react-router-dom"

export default function Hufflepuff() {
    return (
        <div>
            <div>
                <Link to="/Characters/Hogwarts/Hufflepuff/Staff">Staff</Link>
            </div>
            <div>
                <Link to="/Characters/Hogwarts/Hufflepuff/Students">Students</Link>
            </div>
        </div>
    )
}