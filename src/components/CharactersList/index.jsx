import "./charactersList.css";

const CharactersList = ({
    characters,
    onDelete
}) => {

    return (
        <div className="characters-list">

            {characters.map((character, index) => (

                <button
                    key={index}
                    className="character-chip"
                    onClick={() => onDelete(index)}
                >
                    {character}
                </button>

            ))}

        </div>
    );
}

export default CharactersList;