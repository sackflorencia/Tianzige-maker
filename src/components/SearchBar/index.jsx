import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {

    const submit = (e) => {

        e.preventDefault();

        const value =
            e.target["character-input"].value;

        if (!value.trim()) return;

        onSearch(value);

        e.target.reset();
    }

    return (
        <form
            className="search-bar"
            onSubmit={submit}
        >

            <input
                type="text"
                name="character-input"
                placeholder="Ingrese el carácter..."
                maxLength={10}
            />

            <button type="submit">
                Agregar
            </button>

        </form>
    );
};

export default SearchBar;