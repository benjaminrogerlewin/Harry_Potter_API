export default function Spells(props) {
    return (
        <div className="character-grid">
             {
                props.spells.map((spell) => (
                    <div className="characterCard" id="spellCard">
                        <h3>{spell.name}</h3>
                        <p>{spell.description}</p>
                    </div>
                ))
            }
        </div>
    )
}