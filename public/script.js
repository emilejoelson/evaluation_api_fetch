// Function to fetch all countries with flags
const fetchAllCountries = () => {
    axios.get(`${api_localhost}/getAllCountries`)
        .then(response => {
            displayCountries(response.data);
        })
        .catch(error => {
            console.error('Error fetching countries:', error);
            const countriesListDiv = document.getElementById('countries-list');
            countriesListDiv.innerHTML = '<p>Error fetching countries. Please try again later.</p>';
        });
}

// Function to display countries with flags
const displayCountries = (countries) => {
    const countriesListDiv = document.getElementById('countries-list');
    countriesListDiv.innerHTML = '';
    countries.forEach(country => {
        const countryElement = document.createElement('div');
        countryElement.classList.add('country');
        countryElement.innerHTML = `
            <p class="country-name">${country.name}</p>
            <img src="${country.flag}" alt="${country.name}" />
        `;
        countryElement.addEventListener('click', () => {
            fetchCountryDetails(country.name);
            window.scrollTo(0, 0);
        });
        countriesListDiv.appendChild(countryElement);
    });
}

// Function to fetch and display country details
const fetchCountryDetails = (countryName) => {
    axios.get(`${api_localhost}/getCountryDetails/${countryName}`)
        .then(response => {
            displayCountryDetails(response.data);
        })
        .catch(error => {
            console.error(`Error fetching details for ${countryName}:`, error);
            const countryDetailsDiv = document.getElementById('country-details');
            countryDetailsDiv.innerHTML = '<p>Error fetching country details. Please try again later.</p>';
        });
}

// Function to display country details
const displayCountryDetails = (countryDetails) => {
    const countryDetailsDiv = document.getElementById('country-details');
    countryDetailsDiv.innerHTML = `
        <img src="${countryDetails.flag}" alt="${countryDetails.name}" />
        <p><strong>Capital:</strong> ${countryDetails.capital}</p>
        <p><strong>Population:</strong> ${countryDetails.population}</p>
        <p><strong>Region:</strong> ${countryDetails.region}</p>
        <p><strong>Currency:</strong> ${countryDetails.currency}</p>
        <p><strong>Languages:</strong> ${countryDetails.languages.join(', ')}</p>
        <p><strong>Timezones:</strong> ${countryDetails.timezones.join(', ')}</p>
    `;
}

document.addEventListener('DOMContentLoaded', fetchAllCountries);
