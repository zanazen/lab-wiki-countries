// src/App.js
import { useState } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Container, Row } from 'react-bootstrap';
import countries from './countries.json';

function App() {
  const [allCountries, setAllCountries] = useState(countries);

  return (
  <div>
    <NavBar />
    <Container>
        <Row>
          <CountriesList
            allCountries={allCountries}
            setAllCountries={setAllCountries}
          />
          <Routes>
            <Route path="/" />
            <Route
              path="/:id"
              element={<CountryDetails allCountries={allCountries} />}
            />
          </Routes>
        </Row>
      </Container>
  </div>
  )
}
export default App;
