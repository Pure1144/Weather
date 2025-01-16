export const WeatherInfo = (props) => {
    const {searchValue, onChange, filteredData, handleClickCity} = props
    console.log(filteredData);
    
  return (
    <div className="w-screen h-screen flex relative  justify-center items-center">
               <div className="flex absolute justify-center items-center top-10 right-10 flex-col">
               <input className=" border border-black h-[40px] w-[100px] " value={searchValue} onChange={onChange} />
               <div className="w-[300px] ">
               {filteredData.map((el)=> 
               <p onClick={()=>handleClickCity(el)} key={el} >{el}</p>)}  
               </div>
               
               </div>


      <div className="w-1/2 h-full flex justify-center items-center">

        <div className="w-[100px] h-[200px] bg-orange-300">card</div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-[100px] h-[200px] bg-orange-300">card</div>
      </div>

    </div>
  );
};
