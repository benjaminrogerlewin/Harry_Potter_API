import { Link } from "react-router-dom"

export default function Characters() {


    return (
        <div className="grid1">
            <div>
                <Link to="/Characters/Other">Other</Link>
            </div>
            <div>
                <Link to="/Characters/Hogwarts">Hogwarts</Link>
            </div>
        </div>
    )
}