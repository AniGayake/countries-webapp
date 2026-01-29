# 🌍 Countries Explorer App

A modern web application that displays information about countries using the REST Countries API. Built with React and Vite.

## Features

- ✅ **Country List**: Display a list of countries with their flags and names
- ✅ **Search Functionality**: Search bar to filter countries by name
- ✅ **Country Details**: Click on any country to view detailed information including:
  - Capital city
  - Population
  - Languages spoken
  - Timezone
  - Currency
  - Region and subregion
  - Area
- ✅ **Modern UI**: Clean and responsive design with smooth animations
- ✅ **Error Handling**: Proper error handling and loading states
- ✅ **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technologies Used

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Vite** - Build tool and development server
- **REST Countries API** - Data source for country information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd countries-app-fixed
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## How to Use

1. **Browse Countries**: On the home page, you'll see a grid of all countries with their flags and names
2. **Search**: Use the search bar at the top to filter countries by name
3. **View Details**: Click on any country card to see detailed information
4. **Navigate Back**: Use the "Back to Home" button on the details page to return to the main list

## Project Structure

```
src/
├── api/
│   └── countriesApi.js      # API functions for fetching country data
├── components/
│   ├── CountryCard.jsx      # Individual country card component
│   ├── CountryDetails.jsx   # Detailed country information component
│   ├── CountryList.jsx      # Grid layout for country cards
│   └── SearchBar.jsx        # Search input component
├── pages/
│   ├── Home.jsx             # Home page with country list
│   └── Details.jsx         # Country details page
├── App.jsx                  # Main app component with routing
├── main.jsx                 # Application entry point
└── index.css                # Global styles
```

## API Information

This application uses the [REST Countries API](https://restcountries.com/) to fetch country data. The API provides comprehensive information about countries including flags, capitals, populations, languages, currencies, and more.

## License

This project is open source and available for educational purposes.
