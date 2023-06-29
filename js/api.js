export const getWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=633f35fdf4df62e35d09aa55b9148165&lang=en&units=metric`);

        return await response.json();

    } catch (error) {
        console.error(error);
    }
};
