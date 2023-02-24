export default function RavenclawStaff(props) {
    return (
        <div>
            <div>
                <h1>Ravenclaw Staff</h1>
            </div>
            <div>
            {
                props.characters.map((character) => {
                if (character.house === 'Ravenclaw' && character.hogwartsStaff) {
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