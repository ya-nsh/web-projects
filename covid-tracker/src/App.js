import './App.css';
import FormControl from '@material-ui/core/FormControl';
import { Card, CardContent, MenuItem, Select } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Stats from './Stats';
import Map from './Map';
import Table from './Table';

function App() {
  const [countries, setCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [countryChoice, setCountryChoice] = useState('worldwide');

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(res => res.json())
      .then(data => {
        setCountryData(data);
      });
  }, []);

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
          setTableData(data);
        });
    };
    fetchAllCountries();
  }, []);

  const onCountryChange = async e => {
    const countryCode = e.target.value;

    const url =
      countryCode === 'worldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountryChoice(countryCode);
        setCountryData(data);
      });
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Track Covid 19</h1>
          <FormControl className="app__dropdown">
            <Select
              value={countryChoice}
              variant="outlined"
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>

              {countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <Stats
            title="Covid-19 Cases"
            cases={new Intl.NumberFormat('en-US').format(
              countryData.todayCases
            )}
            total={new Intl.NumberFormat('en-US').format(countryData.cases)}
          />
          <Stats
            title="Recovered"
            cases={new Intl.NumberFormat('en-US').format(
              countryData.todayRecovered
            )}
            total={new Intl.NumberFormat('en-US').format(countryData.recovered)}
          />
          <Stats
            title="Deaths"
            cases={new Intl.NumberFormat('en-US').format(
              countryData.todayDeaths
            )}
            total={new Intl.NumberFormat('en-US').format(countryData.deaths)}
          />
        </div>
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3 style={{ textAlign: 'center' }}>Live cases by country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
