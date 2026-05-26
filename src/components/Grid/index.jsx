import "./Grid.css";

const Grid = ({ option, children }) => {

    const renderGrid = () => {
        console.log(option);
        switch (option) {

            case "4-diagonal":
                return (
                    <>
                        <div className="practice-grid-line practice-grid-vertical"></div>

                        <div className="practice-grid-line practice-grid-horizontal"></div>

                        <div className="practice-grid-diagonal-left"></div>

                        <div className="practice-grid-diagonal-right"></div>
                    </>
                );

            case "4":
                return (
                    <>
                        <div className="practice-grid-line practice-grid-vertical"></div>

                        <div className="practice-grid-line practice-grid-horizontal"></div>
                    </>
                );

            case "9":
                return (
                    <>
                        <div className="practice-grid-line practice-grid-vertical first"></div>

                        <div className="practice-grid-line practice-grid-vertical second"></div>

                        <div className="practice-grid-line practice-grid-horizontal first"></div>

                        <div className="practice-grid-line practice-grid-horizontal second"></div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <div className="practice-grid">

            {renderGrid()}

            {children}

        </div>
    );
};

export default Grid