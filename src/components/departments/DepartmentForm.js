import { postDepartment } from "../../helpers/departmentsService" 
import { useForm } from "../../hooks/useForm"
export const DepartmentForm = ({addDepartmentToState}) => {
    
    const initialFormValues = {
        title: "", location: "", employees: ""
    }

    const {formData,handleFormChange,handleFormSubmit} = useForm(addDepartmentToState,initialFormValues,postDepartment)
    const {title, location, employees} = formData

    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={handleFormChange} />
            </div>
            <div>
                <label>Location</label>
                <input type="text" name="location" value={location} onChange={handleFormChange}/>
            </div>
            <div>
                <label>Employees</label>
                <input type="number" name="employees" value={employees} onChange={handleFormChange}/>
            </div>
            <input type="submit" value="Add department"/>
        </form>
    )
}