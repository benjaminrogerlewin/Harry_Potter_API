import Nav from "./Nav"

export default function Header() {
    return (
        <div>
            <div>
                <h1>Welcome to Hogwarts!</h1>
            </div>
            <div className="nav">
                <Nav />
            </div>
        </div>
    )
}