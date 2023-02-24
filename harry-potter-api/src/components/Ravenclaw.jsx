import { Link } from "react-router-dom"

export default function Ravenclaw() {
    return (
        <div>
            <div>
                <Link to="/Characters/Hogwarts/Ravenclaw/Staff">Staff</Link>
            </div>
            <div>
                <Link to="/Characters/Hogwarts/Ravenclaw/Students">Students</Link>
            </div>
        </div>
    )
}