
const Selected = ({course}) => {
    const {name} = course;
    let count = 0;
    count = count + 1;
    // console.log(selectedCourse);
    return (
        <li className="list-decimal">{name}</li>
    );
};

export default Selected;