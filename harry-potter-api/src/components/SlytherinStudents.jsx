export default function SlytherineStudents(props) {
    return (
        <div>
            <div>
                <h1>Slytherin Students</h1>
            </div>
            <div>
            {
                props.characters.map((character) => {
                if (character.house === 'Slytherin' && character.hogwartsStudent) {
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