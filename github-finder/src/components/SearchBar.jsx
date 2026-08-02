import { useState } from "react";

const SUGGESTIONS = ["torvalds", "gaearon", "sindresorhus", "yyx990803"];

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    onSearch(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  const handleQuickSearch = (name) => {
    setInput(name);
    onSearch(name);
  };

  return (
    <div className="search-section">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Enter GitHub username..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="search-btn" onClick={handleSubmit}>
          Search
        </button>
      </div>

      <div className="suggestions">
        <span className="suggestions-label">Try:</span>
        {SUGGESTIONS.map((name) => (
          <button
            key={name}
            className="suggestion-chip"
            onClick={() => handleQuickSearch(name)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
