import { Link } from "react-router-dom"

export default function Characters() {


    return (
        <div className="two-btns">
            <div>
                <Link to="/Characters/Other"><button className="other-btn">Other</button></Link>
            </div>
            <div>
                <Link to="/Characters/Hogwarts"><button className="character-btn">Hogwarts</button></Link>
            </div>
        </div>
    )
}