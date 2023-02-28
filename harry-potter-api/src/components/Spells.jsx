export default function Spells(props) {
    return (
        <div className="character-grid">
             {
                props.spells.map((spell) => (
                    <div className="characterCard" id="spellCard">
                        <h3 className="spellName">{spell.name}</h3>
                        <h4 className="spellDescription">{spell.description}</h4>
                    </div>
                ))
            }
        </div>
    )
}