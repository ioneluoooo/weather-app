

async function GetWeather(city : string) {

    const ApiKey = '7d927606f6246564a29f5a43c2ef3691'
    const ApiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&apiKey=${ApiKey}`
    

    try {

        const response = await fetch(ApiUrl) //requesting data

        if (!response.ok) {
            throw new Error('Shtoto poshlo ne tak')
        }

        const data = await response.json() //parsing to json, returns a java script object
        console.log(data)
        const temperature = Math.round(data.main.temp - 273.15)
        const weatherDescription = data.weather[0].description
        return {
            temperature,weatherDescription
        }
    } catch (error) {
        console.log('There is a unknown error')
    }
}

export default GetWeather