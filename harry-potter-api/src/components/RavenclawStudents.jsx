export default function RavenclawStudents(props) {
    return (
        <div>
            <div>
                <h1>Ravenclaw Students</h1>
            </div>
            <div>
            {
                props.characters.map((character) => {
                if (character.house === 'Ravenclaw' && character.hogwartsStudent) {
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