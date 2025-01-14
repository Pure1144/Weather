import countriesData from "./data";
import { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const data = [countriesData];

  const onChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  // useEffect(() => {
  //                            //console.log("useEffect ajillaa");
  //    if(searchValue===""){
  //     setFilteredData([])
  //    }
  //    else {
  //     const filtered = data.filter((el) =>el.includies(searchValue));
  //      setFilteredData(filtered);
  //   }
  // },[]);

  return (
    <div className="bg-sky-500 h-[1000px] w-[1800px] relative  flex justify-center items-center">
      <div className="absolute rounded-full w-[140px] h-[140px] border border-black flex justify-center items-center">
      <div className="absolute rounded-full w-[340px] h-[340px] border border-black flex justify-center items-center">
      <div className="absolute rounded-full w-[540px] h-[540px] border border-black flex justify-center items-center">
      <div className="absolute rounded-full w-[940px] h-[940px] border border-black flex justify-center items-center"></div>
      </div>
      </div>
      </div>
      
      {/* <div className="bg-blue-500 h-screen w-1/2"> */}
        {/* <button onClick={() => setCount((count)+1)}> click here</button> */}
        {/* <input className="border border-black h-[40px] w-[100px top-20px]" value={searchValue} onChange={onChange}/>
            {filteredData.map((el)=> <p key={el}>{el}</p>)} */}
      {/* </div> */}

      {/* <div className="bg-green-500 h-screen w-1/2 inset-0 m-auto"> */}
        {/* <div className="bg-green-500 h-[800px] w-[900px]">
         <div className="rounded-full w-[900px] h-[900px] border border-white absolute z-1 flex justify-center items-cemter top-40"></div>
         <div className="rounded-full w-[700px] h-[700px] border border-white absolute z-1 flex justify-center items-cemter top-40"></div> */}
        {/* <div>
          <img src="/Subtract.png" />
        </div> */}
        
        {/* </div> */}
    </div>
  );
}

export default App;
