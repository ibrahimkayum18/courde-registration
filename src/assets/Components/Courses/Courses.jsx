import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [totalCourses, setTotalCorses] = useState([]);
    useEffect( () => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setTotalCorses(data))
    } ,[])
    console.log(totalCourses);
    return (
        <div className="flex gap-5 justify-between">
            <div className="w-9/12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* <h2>Course: {totalCourses.length} </h2> */}
                {
                    totalCourses.map(course => <Course 
                        key={course.id}
                        course={course}
                        ></Course>)
                }
            </div>
            <div className="w-3/12">
                <h1>right</h1>
            </div>
        </div>
    );
};

export default Courses;