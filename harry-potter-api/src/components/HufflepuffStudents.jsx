export default function HufflepuffStudents(props) {
    return (
        <div>
            <div>
                <h1>Hufflepuff Students</h1>
            </div>
            <div>
            {
                props.characters.map((character) => {
                if (character.house === 'Hufflepuff' && character.hogwartsStudent) {
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