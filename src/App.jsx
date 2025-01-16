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

  // const data = [countriesData];
  const data = ["apple", "mango", "kiwi"];

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
  const weatherAPIKey ="183c559ec16e4bff8e765408251501"
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
    // console.log(event.target.value);
    setSearchValue(event.target.value);
    const filtered = allCities
    .filter((el)=>el.toLowerCase().startsWith(searchValue.toLowerCase()))
    .slice(0, 5);

    setFilteredData(filtered);
  };

    useEffect(() => {
                             
      getWeatherData();
     
  }, [selectedCity]);

  if(isLoading){
    return<p>loading...</p>
  }

  useEffect(() => {
                             
    getCountries();
    getWeatherData();
}, []);

  

  // useEffect(() => {
  //                            console.log("useEffect ajillaa");
  //    if(searchValue===""){
  //     setFilteredData([])
  //    }
  //    else {
  //     const filtered = data.filter((el) =>el.includes(searchValue));
  //      setFilteredData(filtered);
  //     getCountries();
  //   }
  // },[]);

  return (
    //  <div>
        

    //    {/* <input
    //     placeholder="Search"
    //     postition="absolute"
    //     left="100px"
    //     top="100px"
    //     className="border border-blue"
    //     value={searchValue}
    //     onChange={onChange}
    //     />
    //     */}
    //      {/* {filteredData.map((el)=> <p key={el}>{el}</p>)} */}
     

    // <div>
    // <div className="bg-sky-500 h-[1000px] w-[1800px] flex items-center  ">
    //     <div className="relative bg-teal-200 h-[1000px] w-[900px]">
          
    //    <img src="./E.png" alt="" className="absolute -top-30-right-50" />
    //        <div className="relative bg-teal-200 h-[900px] w-[700px] backdrop-blur-lg flex items-center ">
    //         <div className="flex justify-between items center">
    //          <div className="space-y-2">
    //           <h4 className="text-gray-400">January 14, 2025</h4>
    //           <h2 className="h-12 text-5xl font-extrabold text-gray-900">Ulaanbaatar</h2>
    //           <img src="./Ellipse 20.png" alt=""  />
    //           <img src=".sun.png" alt=""  />
    //          </div>
    //         </div>

    //        </div>

         
    //     </div>

    //        <div className="rounded-full w-[140px] h-[140px] border border-black flex justify-center items-center">
    //        <div className="rounded-full w-[340px] h-[340px] border border-black flex justify-center items-center">
    //        <div className="rounded-full w-[540px] h-[540px] border border-black flex justify-center items-center">
    //        <div className="rounded-full w-[940px] h-[940px] border border-black flex justify-center items-center"></div>
    //        </div>
    //        </div>
    //        </div> 

            
     
    //    <div className="bg-lime-400 h-[1000px] w-[900px]">

      
    //        <div>
    //           <input className="relative border border-black h-[40px] w-[100px top-20px]" value={searchValue} onChange={onChange} left-100px/>
    //            {filteredData.map((el)=> 
    //            <p onClick={()=>handleClickCity(el)} key={el}>{el}</p>)}  
    //        </div>
    //        <img src="./Ellipse 22.png" alt="" className="absolute -top-50-right-50"/>
         
    //   </div>
      
    //   </div>
    //   </div>

   
     

      
      
    //   {/* <div className="bg-blue-500 h-screen w-1/2"> */}
    //     {/* <button onClick={() => setCount((count)+1)}> click here</button> */}
       
    //   {/* </div> */}

    //   {/* <div className="bg-green-500 h-screen w-1/2 inset-0 m-auto"> */}
    //     {/* <div className="bg-green-500 h-[800px] w-[900px]">
    //      <div className="rounded-full w-[900px] h-[900px] border border-white absolute z-1 flex justify-center items-cemter top-40"></div>
    //      <div className="rounded-full w-[700px] h-[700px] border border-white absolute z-1 flex justify-center items-cemter top-40"></div> */}
    //     {/* <div>
    //       <img src="/Subtract.png" />
    //     </div> */}
        
    //     {/* </div> */}
    // </div>
    
    
<div className="relative w-screen h-screen">
<BgColors/>
<Circles/>
<WeatherInfo/>
</div>
  );
}

export default App;
