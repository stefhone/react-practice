import { useForm } from "../../hooks/useForm";
import {postEmployee} from '../../helpers/employeesService';

export const EmployeeForm = ({addEmployeeToState}) => {
    const initialFormValues = {
        first_name: "", last_name: "", email: "", employed: true
    }
    const { formData, handleFormChange, handleFormSubmit } = useForm(addEmployeeToState, initialFormValues, postEmployee);
    const { first_name, last_name, email } = formData;

    return (
        <>
            <h2>This is add an Employee Form.</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="first_name" value={first_name} onChange={handleFormChange}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="last_name" value={last_name} onChange={handleFormChange}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={handleFormChange}/>
                </div>
                <input type="submit" value="Add employee" />
            </form>
        </>
    )
}