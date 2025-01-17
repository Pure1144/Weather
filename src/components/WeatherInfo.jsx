import SunImage from "../assets/sun.png";

export const WeatherInfo = (props) => {
  const { searchValue, onChange, filteredData, handleClickCity, weatherData } = props;
  console.log(filteredData);

  return (
    <div className="w-screen h-screen flex relative  justify-center top-10 left-1">
      {/* <img
        src={SunImage}
        style={{
          border: "1px solid red",
          zIndex: "1000",
          width: "100%",
          height: "100%",
        }}
      /> */}
      <div className="flex absolute justify-center items-center ">
        <input
          className=" border border-black h-[40px] w-[100px] "
          value={searchValue}
          onChange={onChange}
        />
        <div className="w-[300px] ">
          {filteredData.map((el) => (
            <p onClick={() => handleClickCity(el)} key={el}>
              {el}
            </p>
          ))}
        </div>
      </div>

      <div className="w-1/2 h-full flex justify-center ">
        card0
        <div className="w-[600px] h-[900px] bg-orange-300 flex">
          card1
          <div className="w-[500px] h-[700px] bg-blue-300 fit-content">
            card2
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <h4 className="text-gray-400">January 17, 2025</h4>
                <h2 className="h-12 text-5xl font-extrabold text-gray-900">
                  Ulaanbaatar
                </h2>
              </div>
              
            </div>
            <div>
                <img src={SunImage} className="w-[200px] h-[200px]"/>
 

              </div>
              <div class="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
                {weatherData?.dayProps?.temperature || "test"}
              </div>

          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-[600px] h-[900px] bg-orange-300">card</div>
      </div>
    </div>
  );
};
