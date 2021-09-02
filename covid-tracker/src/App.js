import './App.css';
import FormControl from '@material-ui/core/FormControl';
import { MenuItem, Select } from '@material-ui/core';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState(['S']);

  useEffect(() => {
    const allCountries = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then(res => res.json())
        .then(data => {
          const countries = data.map(country => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));
        });
    };
  }, []);
  return (
    <div className="app">
      <div className="app__header">
        <h1>Track Covid 19</h1>
        <FormControl className="app__dropdown">
          <Select>
            {/* <MenuItem value="World">World</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
            <MenuItem value="Option 3">Option 3</MenuItem> */}
            {countries.map(country => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
