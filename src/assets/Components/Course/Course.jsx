// import { BsBook } from 'react-icons/fa6';


const Course = ({course, handleSelect}) => {
    // console.log(course);
    const { name, details, price, credit_hours, img } = course;
    // console.log(img);
    return (
        <div className="p-4 border-2 rounded-lg space-y-3">
            
            <img src={img} alt="" />
            <h2 className="font-semibold text-[1.25rem]">{name}</h2>
            <div className="text-gray-800 font-semibold space-y-2">
            <p>{details}</p>
            <div className="flex items-center justify-between">
                <p>Price: ${price}</p>
                {/* <button><BsBook></BsBook></button> */}
                <p> Credit: {credit_hours}hr</p>
            </div>
            </div>
            <button onClick={() => handleSelect(course)} className="py-2 w-full bg-blue-700 text-white font-bold rounded-lg text-[1.25rem]">Select</button>
        </div>
    );
};

export default Course;