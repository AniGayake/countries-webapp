import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCountryByName } from "../api/countriesApi";
import CountryDetails from "../components/CountryDetails";

export default function Details() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchCountryByName(name)
      .then((data) => {
        setCountry(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Country not found. Please check the name and try again.");
        setLoading(false);
        console.error("Error fetching country:", err);
      });
  }, [name]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading country details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="details-container">
        <button onClick={() => navigate("/")} className="back-button">
          ← Back to Home
        </button>
        <div className="error-container">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return <CountryDetails country={country} />;
}