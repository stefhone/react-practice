import { postDepartment } from "../../helpers/departmentsService" 
export const DepartmentForm = ({addDepartmentToState}) => {
    
    const initialFormValues = {
        title: "", location: "", employees: ""
    }

    return(
        <form>
            <div>
                <label>Title</label>
                <input type="text" name="title" />
            </div>
            <div>
                <label>Location</label>
                <input type="text" name="location"/>
            </div>
            <div>
                <label>Employees</label>
                <input type="email" name="employees"/>
            </div>
            <input type="submit" value="Add department" />
        </form>
    )
}