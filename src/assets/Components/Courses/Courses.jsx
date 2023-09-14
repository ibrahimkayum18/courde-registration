import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Selected from "../Selected/Selected";

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
                return alert('Your credit hour exceed 20hr and remaining credit hour below 0hr')
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
        <div className="flex gap-4 justify-between">
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
            <div className="w-3/12  ">
                <div className="bg-white rounded-lg p-5">
                <h2 className="text-blue-700 font-bold text-[18px] border-b-2 pb-3">Credit Hour Remaining {remaining} hr</h2>
                <h2 className="text-2xl font-bold pt-3">Course Name</h2>
                <ol className="ml-5 text-gray-600 font-semibold space-y-2 mb-4">
                    {
                        selectedCourse.map(course => <Selected
                        key={course.id}
                        course={course}
                        ></Selected>)
                    }
                </ol>
                <h2 className="text-[18px] font-semibold py-3 border-t-2 border-b-2">Total Credit Hour: {totalHour} hr</h2>
                <h2 className="text-[18px] font-semibold pt-3">Total Price: {cost} USD</h2>
                </div>
            </div>
        </div>
    );
};

export default Courses;