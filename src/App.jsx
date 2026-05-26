import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SearchBar from './components/SearchBar'
import CharactersList from './components/CharactersList'
import GridSelector from './components/GridSelector'
import PracticeSheet from './components/PracticeSheet'
import { generatePDF } from "./services/pdfService";


function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (character) => {
    setCharacters([...characters, character]);
  }
  const onDelete = (index) => {
    const newCharacters = [...characters];
    newCharacters.splice(index, 1);
    setCharacters(newCharacters);
  }
  const [selectedGrid, setSelectedGrid] = useState("4-diagonal");
  const sheetRef = useRef();
  return (
    <>
      <SearchBar onSearch={onSearch} />
      <CharactersList characters={characters} onDelete={onDelete} />
      <GridSelector setSelectedGrid={setSelectedGrid} />
      <button
        onClick={() =>
          generatePDF(sheetRef.current)
        }
      >
        Exportar PDF
      </button>
      <div
        className="sheet-container"
        ref={sheetRef}
      >
        <PracticeSheet
          characters={characters}
          option={selectedGrid}
          repetitions={15}
        />
      </div>
    </>
  )
}

export default App
