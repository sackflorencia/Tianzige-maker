import "./practiceSheet.css";

import PracticeGrid from "../PracticeGrid";
import Grid from "../Grid";

const PracticeSheet = ({
    characters,
    option,
    repetitions = 15
}) => {

    return (
        <div className="practice-sheet">

            {characters.map((character, characterIndex) => (

                <div
                    className="practice-row"
                    key={characterIndex}
                >

                    <PracticeGrid
                        character={character}
                        option={option}
                    />

                    {Array.from({
                        length: repetitions
                    }).map((_, gridIndex) => (

                        <Grid
                            key={gridIndex}
                            option={option}
                        />

                    ))}

                </div>

            ))}

        </div>
    );
};

export default PracticeSheet;