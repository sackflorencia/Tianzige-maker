import "./GridSelector.css";

const GridSelector = ({
    setSelectedGrid
}) => {

    const options = [
        {
            id: "4",
            name: "田字格",
            description: "4 cuadrantes",
        },
        {
            id: "4-diagonal",
            name: "米字格",
            description: "Con diagonales",
        },
        {
            id: "9",
            name: "九宫格",
            description: "9 cuadrantes",
        }
    ];

    return (
        <div className="grid-selector">

            {options.map((option) => (

                <button
                    key={option.id}
                    className="grid-option"
                    onClick={() =>
                        setSelectedGrid(option.id)
                    }
                >

                    <span className="grid-name">
                        {option.name}
                    </span>

                    <span className="grid-description">
                        {option.description}
                    </span>

                </button>

            ))}

        </div>
    );
};

export default GridSelector;