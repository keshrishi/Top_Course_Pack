import React, { useEffect, useState } from "react";
import {apiUrl ,filterData}  from './data';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { Spinner } from "./components/Spinner";
import { toast } from "react-toastify";
const App = () => {

  const [ courses, setCourses] = useState([]);
  const [ loading , setLoading] = useState(true);
  const [category , setcategory] = useState(filterData[0].title);
 
  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      setCourses(output.data);
    }
    catch(error) {
        toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
      <Navbar/>
      </div>

      <div className="bg-bgDark2 ">
      <div>
        <Filter filterData = {filterData} category = {category} setcategory = {setcategory}
        />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          // if loading is true i.e. api is still fetching then show spinner UI else courses UI.
          loading ? (<spinner/>) : (<Cards courses = {courses} category = {category} />)
        }
      </div>

      </div>
      
      
    </div>
  );
};

export default App;
