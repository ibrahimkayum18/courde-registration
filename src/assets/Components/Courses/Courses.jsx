import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Selected from "../Selected/Selected";
// import Selected from "../Selected/Selected";

const Courses = () => {

    const [totalCourses, setTotalCorses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(20);
    const [totalHour, setTotalHour] = useState(0);
    const [cost, setCost] = useState(0)
    useEffect( () => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setTotalCorses(data))
    } ,[])

    const handleSelect = (course) => {
        let cost = course.price;
        let totalHour = course.credit_hours;
        let remainingTime = 0;
        const isFound = selectedCourse.find(item => item.id == course.id);
        
        if (isFound) {
            return alert('This course is already selected, Please choose another course.');
        }
        else{
            selectedCourse.forEach(item => {
                cost = cost + item.price;
                totalHour =totalHour + item.credit_hours;
            })
            remainingTime = 20 - totalHour;

            if(remainingTime < 0 && totalHour > 20){
                return alert('Your credit hour exceed 20hr ad remaining credit hour below 0hr')
            }
            else{
                setRemaining(remainingTime)
                setTotalHour(totalHour)
                setCost(cost);
                // console.log(selectedCourse);
                const newCourse = [...selectedCourse,course]
                setSelectedCourse(newCourse);
            }
            

        }
    }

    // console.log(totalCourses);
    return (
        <div className="flex gap-5 justify-between">
            <div className="w-9/12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* <h2>Course: {totalCourses.length} </h2> */}
                {
                    totalCourses.map(course => <Course 
                        key={course.id}
                        course={course}
                        handleSelect={handleSelect}
                        ></Course>)
                }
            </div>
            <div className="w-3/12">
                <h2>Credit Hour Remaining {remaining}</h2>
                <h2>Course Name</h2>
                <ol>
                    {
                        selectedCourse.map(course => <Selected
                        key={course.id}
                        course={course}
                        ></Selected>)
                    }
                </ol>
                <h2>Total Credit Hour: {totalHour}</h2>
                <h2>Total Price: {cost}USD</h2>
            </div>
        </div>
    );
};

export default Courses;