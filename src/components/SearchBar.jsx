export default function SearchBar({ onSearch }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="🔍 Search for a country..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
}