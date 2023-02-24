export default function GryffindorStudents(props) {
    return (
        <div>
            <div>
                <h1>Gryffindor Students</h1>
            </div>
            <div>
            {
                props.characters.map((character) => {
                if (character.house === 'Gryffindor' && character.hogwartsStudent) {
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