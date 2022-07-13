import { useEffect, useState } from "react";
import { getEmployees } from "../helpers/employeesService";

export const useEmployees = () => {
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        console.log("render");
        getEmployees()
            .then(employees => setEmployees(employees))
    }, [])

    const updateEmployeeStatus = (id) => {
        // update state / replacing state
        // 1. copy initial state (spread operator ...)
        const employeeCopy = [...employees];
        // 2. make changes to new copy
        employeeCopy.forEach((employee) => {
            if (employee.id == id) {
                // drilling down into employee object. specifically the employed key and setting value to be opposite of what it currently it is, using bang operator !
                employee.employed = !employee.employed;
            }
        })
        // 3. set new copy as new state
        setEmployees(employeeCopy);
    }

    const addEmployeeToState = (newEmployee) => {
        // console.log('Add employee to state called in App.js', newEmployee);
        const newEmployeeCopy = [...employees, newEmployee]
        setEmployees(newEmployeeCopy);
    }

    return {
        employees,
        updateEmployeeStatus,
        addEmployeeToState
    }
}