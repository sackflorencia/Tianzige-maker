import Grid from "../Grid";
import "./practiceGrid.css";

const PracticeGrid = ({ character, option }) => {

    return (
        <Grid option={option}>

            <span className="practice-grid-character">
                {character}
            </span>

        </Grid>
    );
};

export default PracticeGrid;