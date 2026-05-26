const GridSelector = ({ setSelectedGrid }) => {
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
        <>
            {options.map((option) => (
                <button
                    key={option.id}
                    onClick={() => setSelectedGrid(option.id)}
                >
                    {option.name} - {option.description}
                </button>
            ))}
        </>
    );
};

export default GridSelector