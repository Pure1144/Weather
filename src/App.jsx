import countriesData from "./data";
import { useEffect, useState } from "react";
import { getAllCities } from "./utils/get-all-cities";
import { BgColors } from "./components/BgColors";
import { Circles } from "./components/Circles";
import { WeatherInfo } from "./components/WeatherInfo";
function App() {
  const [count, setCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [allCities, setAllCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar,Mongolia");
  const [filteredData, setFilteredData] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  const getCountries = async() => {
        try{
          const response = await fetch(
            "https://countriesnow.space/api/v0.1/countries"
            );
          console.log(response);
          
         
           const result =  await response.json();
           console.log(result);

           const countries = result.data;
           const cities = getAllCities(countries);
           setAllCities(cities); 
           
        } catch (error){
          console.log(error);
          
        }
         
  };
  const weatherApiKey ="183c559ec16e4bff8e765408251501"
  const getWeatherData = async() => {
    setIsLoading(true)
    try{
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`
        );
       const result = await response.json();
       setWeatherData(result);
       console.log(result);
       
    } catch (error){
      console.log(error);
      
    }finally{
      setIsLoading(false)
    }
     
};

const handleClickCity = (city) =>{
  //set
}

  const onChange = (event) => {
    setSearchValue(event.target.value);
    const filtered = allCities
    .filter((el)=>el.toLowerCase().startsWith(searchValue.toLowerCase()))
    .slice(0, 2);

    setFilteredData(filtered);
  };

    useEffect(() => {
                             
      getWeatherData();
     
  }, [selectedCity]);


  useEffect(() => {
    getCountries()    
    getWeatherData();
             console.log("iueuf");
             
}, []);


  return (
<div className="relative w-screen h-screen">
<BgColors/>
<Circles/>
<WeatherInfo searchValue={searchValue} onChange={onChange} filteredData={filteredData} handleClickCity={handleClickCity} />
</div>
  );
}

export default App;
