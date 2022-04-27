const getCountries = () =>
{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        const countries = xhr.response;
        
        const getPopulation = countries.map( a => a.population);
        const getTotalPopulation = getPopulation.reduce((sum,curr) => sum+curr);

       
        console.log(getTotalPopulation);
        

    }
}

getCountries();
