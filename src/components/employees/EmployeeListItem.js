export const EmployeeListItem = ({employee, updateEmployeeStatus}) => {

    const toggleStaff = (e) => {
        console.log('Click', e.target.value);
        updateEmployeeStatus(e.target.value);
    }

    return (
        <>
            <li className={employee.employed ? "green" : "red"}>
                <h5>Name: {employee.first_name} {employee.last_name}</h5>
                <p><strong>Email:</strong> {employee.email}</p>
                
                {employee.employed ? <button onClick={toggleStaff} value={employee.id}>Fired</button> : <button onClick={toggleStaff} value={employee.id}>Hired</button>}
            </li>
        </>
    )
}