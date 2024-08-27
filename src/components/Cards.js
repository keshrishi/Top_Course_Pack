import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses ;
    let category = props.category;
    const[likedCourses , setLikedCourses] = useState([]);
    //this function returns us all the courses received from the api call

    function getCourses  ()  {
       
        if(category === "All") {
            let allCourses = []; 

            Object.values(courses).forEach(courseCategory => {
                courseCategory.forEach(course => {
                    allCourses.push(course);
                })
            })  
            return allCourses;
        } else {
            // main sirf specific category ka data pass karunga
            return courses[category];
        }
    
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
            getCourses().map( (course) => {
                return (
                <Card key={course.id} course = {course} likedCourses = {likedCourses}
                setLikedCourses = {setLikedCourses}/>
                );
            })
            }
        </div>
    );
};

export default Cards;