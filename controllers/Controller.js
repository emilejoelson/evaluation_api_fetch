const axios = require('axios');

const getAllCountries = (req, res) => {
    axios.get(`${process.env.api_all_countries}`)
        .then(response => {
            const countries = response.data;
            const countriesWithFlags = countries.map(country => ({
                name: country.name.common,
                flag: country.flags.png
            }));
            res.json(countriesWithFlags);
        })
        .catch(error => {
            console.error('Error fetching countries:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}

const getCountryDetails = (req, res) => {
    const countryName = req.params.countryName;

    axios.get(`${process.env.api_country_name}/${countryName}`)
        .then(response => {
            const countryData = response.data[0]; 
            const countryDetails = {
                flag: countryData.flags.png,
                capital: countryData.capital[0],
                population: countryData.population.toLocaleString(), 
                region: countryData.region,
                currency: countryData.currencies ? Object.values(countryData.currencies)[0].name : '',
                languages: Object.values(countryData.languages),
                timezones: countryData.timezones
            };
            res.json(countryDetails);
        })
        .catch(error => {
            console.error(`Error fetching details for country ${countryName}:`, error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}

const displayCountries = (req, res) => {
    res.render('index',{
        api_localhost: process.env.api_localhost
    }); 
}


module.exports = {
  getAllCountries,getCountryDetails,displayCountries
};