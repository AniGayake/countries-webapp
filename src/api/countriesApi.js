import axios from "axios";

const BASE = "https://restcountries.com/v3.1";

export const fetchAllCountries = async () => {
  try {
    // Specify required fields (max 10) to avoid bad request error
    // Essential fields: name, flags, capital, population, languages, timezones, currencies, cca3, region, subregion
    const fields = [
      "name",
      "flags",
      "capital",
      "population",
      "languages",
      "timezones",
      "currencies",
      "cca3",
      "region",
      "subregion"
    ].join(",");
    
    // Use axios params to properly encode the query string
    const res = await axios.get(`${BASE}/all`, {
      params: {
        fields: fields
      }
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching all countries:", error);
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data);
    }
    throw new Error("Failed to fetch countries");
  }
};

export const fetchCountryByName = async (name) => {
  try {
    // Use fullText=true for exact matching to avoid partial matches
    // e.g., "India" should not match "British Indian Ocean Territory"
    const res = await axios.get(`${BASE}/name/${encodeURIComponent(name)}`, {
      params: {
        fullText: true
      }
    });
    if (res.data && res.data.length > 0) {
      return res.data[0];
    }
    throw new Error("Country not found");
  } catch (error) {
    console.error("Error fetching country by name:", error);
    // If exact match fails, try without fullText as fallback
    if (error.response?.status === 404) {
      try {
        const fallbackRes = await axios.get(`${BASE}/name/${encodeURIComponent(name)}`);
        if (fallbackRes.data && fallbackRes.data.length > 0) {
          // Find exact match in results
          const exactMatch = fallbackRes.data.find(
            country => country.name.common.toLowerCase() === name.toLowerCase()
          );
          if (exactMatch) {
            return exactMatch;
          }
        }
      } catch (fallbackError) {
        console.error("Fallback search also failed:", fallbackError);
      }
    }
    throw error;
  }
};