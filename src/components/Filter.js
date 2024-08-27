import React from "react";

const Filter =  (props) => {
        let filterData = props.filterData;
        let category = props.category;
        let setcategory = props.setcategory;
        function filterHandler(title) {
            setcategory(title)
        }
    return (
        <div className="w-11/12 max-w-max mx-auto flex-wrap space-x-4 gap-y-4 py-4 flex justify-center">
            {
            filterData.map ( (data) => (
                
                <button className = {`text-lg border-2 bg-black text-white hover:bg-opacity-50 transition-all duration-300
                 rounded-md font-medium px-2 py-1
                 ${category === data.title ? "bg-opacity-60 border-white " : "bg-opacity-40 border-transparent"}
                 `}
                 key = {data.id}
                 onClick = {() => filterHandler(data.title)}
                 >{data.title}</button>
                    
            ))}
        </div>
    );
};

export default Filter;