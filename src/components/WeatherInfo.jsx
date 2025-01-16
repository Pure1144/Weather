export const WeatherInfo = (props) => {
    const {searchValue, onChange, filteredData, handleClickCity} = props
    console.log(filteredData);
    
  return (
    <div className="w-screen h-screen flex relative  justify-center top-10 left-1">
               <div className="flex absolute justify-center items-center ">
               <input className=" border border-black h-[40px] w-[100px] " value={searchValue} onChange={onChange} />
               <div className="w-[300px] ">
               {filteredData.map((el)=> 
               <p onClick={()=>handleClickCity(el)} key={el} >{el}</p>)}  
               </div>
               
               </div>


      <div className="w-1/2 h-full flex justify-center ">card0

        <div className="w-[600px] h-[900px] bg-orange-300 flex">card1
        <div className="w-[500px] h-[700px] bg-blue-300 fit-content">card2</div>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-[600px] h-[900px] bg-orange-300">card</div>
      </div>

    </div>
  );
};
