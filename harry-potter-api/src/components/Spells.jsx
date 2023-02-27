export default function Spells(props) {
    return (
        <div className="character-grid">
             {
                props.spells.map((spell) => (
                    <div className="characterCard">
                        <h3>{spell.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}