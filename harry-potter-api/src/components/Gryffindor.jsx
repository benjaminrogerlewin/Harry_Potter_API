import { Link } from "react-router-dom"

export default function Gryffindor() {
    return (
        <div>
            <div>
                <Link to="/Characters/Hogwarts"><button className="back-btn">Back</button></Link>
            </div>
            <div className="two-btns">
                <div>
                    <Link to="/Characters/Hogwarts/Gryffindor/Staff"><button className="staff-btn">Staff</button></Link>
                </div>
                <div>
                    <Link to="/Characters/Hogwarts/Gryffindor/Students"><button className="students-btn">Students</button></Link>
                </div>
            </div>
        </div>
    )
}