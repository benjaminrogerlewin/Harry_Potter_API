import { Link } from "react-router-dom"

export default function Hogwarts() {

    return (
        <div className="houses">
           <Link to="/Characters/Hogwarts/Gryffindor"><button className="gbtn">Gryffindor</button></Link>
           <Link to="/Characters/Hogwarts/Ravenclaw"><button className="rbtn">Ravenclaw</button></Link>
           <Link to="/Characters/Hogwarts/Hufflepuff"><button className="hbtn">Hufflepuff</button></Link>
           <Link to="/Characters/Hogwarts/Slytherin"><button className="sbtn">Slytherin</button></Link>
        </div>
    )
}