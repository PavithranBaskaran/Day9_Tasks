const getCountries = () =>
{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        const countries = xhr.response;
        
        function getElement(item)
        {
            console.log(item.name.common);
            console.log(item.capital);
            console.log(item.flags.png);
        }
        countries.forEach(getElement);

        

    }
}

getCountries();
