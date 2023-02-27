import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/Characters">Characters</Link>
            <Link to="/Spells">Spells</Link>
        </div>
    )
}