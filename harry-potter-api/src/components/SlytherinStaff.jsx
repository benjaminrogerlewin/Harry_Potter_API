export default function SlytherinStaff(props) {
    return (
        <div>
            <div>
                <h1>Slytherin Staff</h1>
            </div>
            <div>
            {
                props.characters.map((character) => {
                if (character.house === 'Slytherin' && character.hogwartsStaff) {
                    return (
                    <div>
                        <h3>{character.name}</h3>
                    </div>
                    )
                }
                })
            }
            </div>
        </div>
    )
}