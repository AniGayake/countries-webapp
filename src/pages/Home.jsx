import { useEffect, useState } from "react";
import { fetchAllCountries } from "../api/countriesApi";
import SearchBar from "../components/SearchBar";
import CountryList from "../components/CountryList";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchAllCountries()
      .then((data) => {
        // Sort countries alphabetically by name
        const sorted = data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted);
        setFiltered(sorted);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load countries. Please try again later.");
        setLoading(false);
        console.error("Error fetching countries:", err);
      });
  }, []);

  const onSearch = (text) => {
    const res = countries.filter((c) =>
      c.name.common.toLowerCase().includes(text.toLowerCase())
    );
    // Sort filtered results alphabetically
    const sorted = res.sort((a, b) => 
      a.name.common.localeCompare(b.name.common)
    );
    setFiltered(sorted);
  };

  return (
    <div className="home-container">
      <header className="app-header">
        <h1>🌍 Countries Explorer</h1>
        <p>Discover information about countries around the world</p>
      </header>
      <SearchBar onSearch={onSearch} />
      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading countries...</p>
        </div>
      )}
      {error && (
        <div className="error-container">
          <p>{error}</p>
        </div>
      )}
      {!loading && !error && (
        <>
          {filtered.length === 0 ? (
            <div className="no-results">
              <p>No countries found. Try a different search term.</p>
            </div>
          ) : (
            <div className="results-info">
              <p>Found {filtered.length} {filtered.length === 1 ? 'country' : 'countries'}</p>
            </div>
          )}
          <CountryList countries={filtered} />
        </>
      )}
    </div>
  );
}