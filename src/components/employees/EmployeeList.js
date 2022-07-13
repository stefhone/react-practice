import { EmployeeListItem } from "./EmployeeListItem"

export const EmployeeList = ({employees, updateEmployeeStatus}) => {
    
    const employeeNodes = employees?.map((employee) => {
        return (
            <EmployeeListItem key={employee.id} employee={employee} updateEmployeeStatus={updateEmployeeStatus}/>
        )
    })

    return (
        <>
            <h2>This is the Employee List component</h2>
            <ul>
                {employeeNodes}
            </ul>
        </>
    )
}