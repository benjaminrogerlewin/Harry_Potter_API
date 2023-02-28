import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav-links">
            <Link to="/"><button className="nav-btn">Home</button></Link>
            <Link to="/Characters"><button className="nav-btn">Characters</button></Link>
            <Link to="/Spells"><button className="nav-btn">Spells</button></Link>
        </div>
    )
}