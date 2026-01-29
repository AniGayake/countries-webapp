import { useNavigate } from "react-router-dom";

export default function CountryDetails({ country }) {
  const navigate = useNavigate();

  const formatPopulation = (pop) => {
    return new Intl.NumberFormat("en-US").format(pop);
  };

  return (
    <div className="details-container">
      <button onClick={() => navigate("/")} className="back-button">
        ← Back to Home
      </button>
      <div className="country-details">
        <div className="details-header">
          <h1>{country.name.common}</h1>
          {country.name.official !== country.name.common && (
            <p className="official-name">{country.name.official}</p>
          )}
        </div>
        <div className="details-content">
          <div className="flag-section">
            <img 
              src={country.flags.png} 
              alt={`Flag of ${country.name.common}`}
              className="country-flag-large"
            />
            {country.coatOfArms?.png && (
              <img 
                src={country.coatOfArms.png} 
                alt={`Coat of arms of ${country.name.common}`}
                className="coat-of-arms"
              />
            )}
          </div>
          <div className="details-info">
            <div className="info-section">
              <h2>Country Information</h2>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Capital:</span>
                  <span className="info-value">
                    {country.capital?.[0] || "N/A"}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Population:</span>
                  <span className="info-value">
                    {formatPopulation(country.population)}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Region:</span>
                  <span className="info-value">
                    {country.region || "N/A"}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Subregion:</span>
                  <span className="info-value">
                    {country.subregion || "N/A"}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Timezone:</span>
                  <span className="info-value">
                    {country.timezones?.join(", ") || "N/A"}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Languages:</span>
                  <span className="info-value">
                    {country.languages 
                      ? Object.values(country.languages).join(", ")
                      : "N/A"}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Currency:</span>
                  <span className="info-value">
                    {country.currencies 
                      ? Object.values(country.currencies)
                          .map(c => `${c.name} (${c.symbol || ""})`)
                          .join(", ")
                      : "N/A"}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Area:</span>
                  <span className="info-value">
                    {country.area 
                      ? `${formatPopulation(country.area)} km²`
                      : "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}