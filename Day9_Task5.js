const getCountries = () =>
{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        const countries = xhr.response;
        
        // const getCurrency = countries.filter( a => a.currencies == "INR");
        //const getTotalPopulation = getPopulation.reduce((sum,curr) => sum+curr);

       
        function getElement(item)
        {
            if(item.currencies.INR === "Indian rupee")
            {
            console.log(item.name.common);
            }
        }
        countries.forEach(getElement);
        

    }
}

getCountries();
