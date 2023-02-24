import { Link } from "react-router-dom"

export default function Slytherin() {
    return (
        <div>
            <div>
                <Link to="/Characters/Hogwarts/Slytherin/Staff">Staff</Link>
            </div>
            <div>
                <Link to="/Characters/Hogwarts/Slytherin/Students">Students</Link>
            </div>
        </div>
    )
}