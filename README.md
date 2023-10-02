# weather app

###

## installation

```shell
git clone https://github.com/kenjitheman/weatherman.lol
```

## usage
- you have to have your openweather api key to use it
- paste your api key in api.js file (js folder)

```js
export const getWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=<api_key>&lang=en&units=metric`);

        return await response.json();

    } catch (error) {
        console.error(error);
    }
};
```

## license

- [MIT](https://choosealicense.com/licenses/mit/)
