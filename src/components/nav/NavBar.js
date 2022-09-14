import { Link } from "react-router-dom";

export const NavBar = (params) => {
    // const id = 4;
    // // template literals puts a string into another string using a variable 
    // const url = `/employees/${id}`;
    return (
        <>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/employees'>Employees</Link>
                </li>
                <li>
                    <Link to='/departments'>Departments</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
            </ul>
        </>
    );
}