import './App.css';
import FormControl from '@material-ui/core/FormControl';
import { Card, CardContent, MenuItem, Select } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Stats from './Stats';
import Map from './Map';

function App() {
  const [countries, setCountries] = useState([]);
  const [countryChoice, setCountryChoice] = useState('worldwide');

  useEffect(() => {
    const fetchAllCountries = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then(res => res.json())
        .then(data => {
          const countries = data.map(country => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));

          setCountries(countries);
        });
    };
    fetchAllCountries();
  }, []);

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Track Covid 19</h1>
          <FormControl className="app__dropdown">
            <Select
              value={countryChoice}
              onChange={e => setCountryChoice(e.target.value)}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>

              {countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <Stats title="Covid-19 Cases" cases={20} total={2300} />
          <Stats title="Recovered" cases={20} total={2300} />
          <Stats title="Deaths" cases={20} total={2300} />
        </div>
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
