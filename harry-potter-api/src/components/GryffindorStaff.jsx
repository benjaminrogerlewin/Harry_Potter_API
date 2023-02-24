export default function GryffindorStaff(props) {
    return (
        <div>
            <div>
                <h1>Gryffindor Staff</h1>
            </div>
            <div>
            {
                props.characters.map((character) => {
                if (character.house === 'Gryffindor' && character.hogwartsStaff) {
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