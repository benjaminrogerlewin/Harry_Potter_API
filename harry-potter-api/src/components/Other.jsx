export default function Other(props) {
    return (
        <div>
            <div>
                <h1>Other</h1>
            </div>
            <div>
            {
                props.characters.map((character) => {
                if (character.house === '') {
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