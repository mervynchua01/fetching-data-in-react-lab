import {useState} from 'react'

function StarshipSearch({ onSearch, onReset, resultCount, hasFilter }) {
  const [input, setInput] = useState("");
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(input);
    setPrevSearchTerm(input);
    setInput("");
  }

  return (
    <div>
      <p>{resultCount} results shown</p>
      <p>
        {prevSearchTerm
          ? `Last search: "${prevSearchTerm}"`
          : "Search for a starship by name."}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search starships..."
        />
        <button type="submit">Search</button>
        {hasFilter && (
          <button
            type="button"
            onClick={() => {
              onReset();
              setPrevSearchTerm("");
            }}
          >
            Show all starships
          </button>
        )}
      </form>
    </div>
  );
}

export default StarshipSearch;
