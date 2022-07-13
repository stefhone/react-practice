export const DepartmentListItem = ({department}) => {
    const {title,location,employees} = department;
    return (
        <li>
            <h5>Title: {title}</h5>
            <p><strong>Location:</strong> {location} </p>
            <p><strong>Employees:</strong> {employees} </p>
        </li>
    )
}