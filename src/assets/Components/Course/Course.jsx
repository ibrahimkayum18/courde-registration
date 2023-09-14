



const Course = ({course}) => {
    // console.log(course);
    const { name, details, price, credit_hours, img } = course;
    return (
        <div className="p-4 border-2 rounded-lg">
            
            {/* <img src={img} alt="" /> */}
            <h2>{name}</h2>
            <p>{details}</p>
            <div className="flex items-center">
                <p>Price: ${price}</p>
                <button></button>
                <p>Credit: {credit_hours}hr</p>
            </div>
            <button className="py-2 w-full bg-blue-700 text-white font-bold rounded-lg text-[1.25rem]">Select</button>
        </div>
    );
};

export default Course;