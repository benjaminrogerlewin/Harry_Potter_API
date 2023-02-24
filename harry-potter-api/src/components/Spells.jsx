export default function Spells(props) {
    return (
        <div>
             {
                props.spells.map((spell) => (
                    <div>
                        <h3>{spell.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}