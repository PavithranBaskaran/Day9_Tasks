const getCountries = () =>
{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        const countries = xhr.response;
        const getAsia = (a) => a.region == "Asia"
        const Task = countries.filter(getAsia)
        const getCountry = (coun) => coun.name.common;
        const Res = Task.map(getCountry)

        console.log(Res)

    }
}

getCountries();
