import { Link } from "react-router-dom"

export default function Gryffindor() {
    return (
        <div>
            <div>
                <Link to="/Characters/Hogwarts/Gryffindor/Staff">Staff</Link>
            </div>
            <div>
                <Link to="/Characters/Hogwarts/Gryffindor/Students">Students</Link>
            </div>
        </div>
    )
}