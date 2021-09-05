import './App.css';
import numeral from 'numeral';
import FormControl from '@material-ui/core/FormControl';
import { Card, CardContent, MenuItem, Select } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Stats from './Stats';
import Map from './Map';
import 'leaflet/dist/leaflet.css';
import Table from './Table';
import { prettyPrintStat, sortData } from './utils';
import LineGraph from './LineGraph';

function App() {
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState('cases');
  const [countryData, setCountryData] = useState({});
  const [countryChoice, setCountryChoice] = useState('worldwide');
  const [mapCenter, setMapCenter] = useState({ lat: 51.5074, lng: 0.1278 });
  const [mapZoom, setMapZoom] = useState(4);

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

          const sortedData = sortData(data);
          setMapCountries(data);
          setTableData(sortedData);
          setCountries(countries);
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

        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
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
            isRed
            onClick={e => setCasesType('cases')}
            title="Covid-19 Cases"
            active={casesType === 'cases'}
            cases={new Intl.NumberFormat('en-US').format(
              countryData.todayCases
            )}
            total={new Intl.NumberFormat('en-US').format(countryData.cases)}
          />

          <Stats
            onClick={e => setCasesType('recovered')}
            active={casesType === 'recovered'}
            title="Recovered"
            cases={new Intl.NumberFormat('en-US').format(
              countryData.todayRecovered
            )}
            total={new Intl.NumberFormat('en-US').format(countryData.recovered)}
          />

          <Stats
            isRed
            onClick={e => setCasesType('deaths')}
            active={casesType === 'deaths'}
            title="Deaths"
            cases={new Intl.NumberFormat('en-US').format(
              countryData.todayDeaths
            )}
            total={new Intl.NumberFormat('en-US').format(countryData.deaths)}
          />
        </div>
        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3 style={{ textAlign: 'center' }}>Live cases by country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new cases</h3>
          <LineGraph casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
