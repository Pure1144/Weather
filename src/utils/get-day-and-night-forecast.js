export const getDayAndNightForecast = (weatherData) => {
    console.log(weatherData);
    
 const { location, forecast } = weatherData;

 console.log(weatherData?.forecast.forecastday);
//  console.log(forecast.forecastday);

 const [forecastDay] = forecast?.forecastDay

// //  const forecastDay = forecast?.forecastDay[0]


// console.log("helloo");

 console.log(forecastDay);
 

 

 const dayProps = {
    city: location?.name,
    temperature: weatherData?.forecast.forecastday?.day?.maxtemp_c,
    condition: weatherData?.forecast.forecastday?.day?.condition.text,
 };
 const nightProps ={
    ...dayProps,
    temperature: weatherData?.forecast.forecastday?.day?.mintemp_c,
 };

return {dayProps, nightProps};
};