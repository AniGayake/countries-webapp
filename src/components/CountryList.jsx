import CountryCard from "./CountryCard";

export default function CountryList({ countries }) {
  return (
    <div className="country-list">
      {countries.map((c) => (
        <CountryCard key={c.cca3} country={c} />
      ))}
    </div>
  );
}