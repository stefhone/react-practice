import { EmployeeList } from "./components/employees/EmployeeList";
import "./App.css";
import { EmployeeForm } from "./components/employees/EmployeeForm";
import { NavBar } from "./components/nav/NavBar";
import { useEmployees } from "./hooks/useEmployees";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DepartmentList } from "./components/departments/DepartmentList";
import { useDepartments } from "./hooks/useDepartments";
import { DepartmentForm } from "./components/departments/DepartmentForm";
import { ProductList } from "./components/products/ProductList";
import { useProducts } from "./hooks/useProducts";

function App() {

  const {employees,updateEmployeeStatus, addEmployeeToState} = useEmployees();  

  const {departments, addDepartmentToState } = useDepartments();

  const {products} = useProducts()

  console.log({products});

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<NavBar/>}/>
          <Route path='/employees' element={
            <>
              <NavBar/>
              <EmployeeList employees={employees} updateEmployeeStatus={updateEmployeeStatus}/>
              <EmployeeForm addEmployeeToState={addEmployeeToState} /> 
            </>
          }/>
          <Route path='/departments' element={
            <>
              <NavBar/>
              <DepartmentList departments={departments}/>
              <DepartmentForm addDepartmentToState={addDepartmentToState} />
            </>
          }/>
          <Route path='/products' element={
            <>
              <NavBar/>
              <ProductList products={products}/>
            </>
          }/>
        </Routes>
      </Router>
      {/* <h1>This is the app!</h1>
      {employees && <EmployeeList employees={employees} updateEmployeeStatus={updateEmployeeStatus}/>}
      <EmployeeForm addEmployeeToState={addEmployeeToState} /> */}
    </>
  );
}

export default App;
