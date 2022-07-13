import { useEffect, useState } from "react";
import { getDepartments } from "../helpers/departmentsService";

export const useDepartments = () => {

    const [departments, setDepartments] = useState(null);

    useEffect(() => {
        console.log('render useDepartments');
        getDepartments().then((data) => {
            setDepartments(data);            
        });
    }, [])

    const addDepartmentToState = (department) => {
        const departmentsCopy = [...departments, department]
        setDepartments(departmentsCopy)
    }

    return {
        departments,
        addDepartmentToState
    }

}