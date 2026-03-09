import { useState, useEffect } from "react";
import { index } from "./services/starshipService.js";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch.jsx";
import StarshipList from "./components/StarshipList/StarshipList.jsx";

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [hasFilter, setHasFilter] = useState(false);

  useEffect(() => {
    index().then((data) => {
      setStarshipsData(data);
      setDisplayedStarships(data);
    });
  }, []);


function handleSearch(query) {
  const filtered = starshipsData.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase()),
  );
  setDisplayedStarships(filtered);
  setHasFilter(true);
}

function handleReset() {
  setDisplayedStarships(starshipsData);
  setHasFilter(false);
}


  return (
    <main>
      <h1>Star Wars Starships</h1>
      <StarshipSearch onSearch={handleSearch} resultCount={displayedStarships.length} onReset={handleReset} hasFilter={hasFilter}/>
      <StarshipList starships={displayedStarships} />
    </main>
  );
};

export default App;
