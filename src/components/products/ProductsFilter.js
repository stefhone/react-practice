import { useState } from "react";

export const ProductsFilter = ({filterProducts}) => {
    
    const initialFormFilterValues = {name: ""}

    const [filterData, setFilterData] = useState(initialFormFilterValues);

    const handleFilterFormChange = (e) => {
        const filterDataCopy = {...filterData}

        filterDataCopy[e.target.name] = e.target.value;

        console.log('event value =', e.target.value)

        setFilterData(filterDataCopy)

        filterProducts(e.target.value)
    }

    return (
        <>
            <h2>This is the Product Filter.</h2>
            <form action="">
                <label>Filter by Name</label>
                <input type="text" value={filterData.name} name="name" onChange={handleFilterFormChange}/>
            </form>
        </>
    )
}