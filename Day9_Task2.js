const getCountries = () =>
{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        const countries = xhr.response;
        
        const getPopulation = countries.filter( a => a.population < 200000);
        const getCountry = getPopulation.map( c => c.name.common);
        console.log(getCountry);
        

    }
}

getCountries();
