<h2 align="center">weather app</h2>

###

## installation

```
git clone https://github.com/kenjitheman/weather.guru
```

## usage
- you have to have your openweather api key to use it
- paste your api key in api.js file (js folder)

```
export const getWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=633f3f4df62e35d09ia55b1148165&lang=en&units=metric`);      // example api key (have to be your openweather api key | API キーの例 (openweather である必要があります)

        return await response.json();

    } catch (error) {
        console.error(error);
    }
};
```

## license

- [MIT](https://choosealicense.com/licenses/mit/)
