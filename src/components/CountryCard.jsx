import { useNavigate } from "react-router-dom";

export default function CountryCard({ country }) {
  const navigate = useNavigate();

  return (
    <div
      className="country-card"
      onClick={() => navigate(`/country/${country.name.common}`)}
    >
      <div className="flag-container">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="country-flag"
        />
      </div>
      <div className="card-content">
        <h3 className="country-name">{country.name.common}</h3>
        {country.capital?.[0] && (
          <p className="country-capital">📍 {country.capital[0]}</p>
        )}
      </div>
    </div>
  );
}