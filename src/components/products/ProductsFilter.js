import { useState } from "react";

export const ProductsFilter = ({filterProducts, clearFilter}) => {
    
    const initialFormFilterValues = {name: "", category: ""}

    const [filterData, setFilterData] = useState(initialFormFilterValues);

    const handleFilterFormChange = (e) => {
        const filterDataCopy = {...filterData}

        filterDataCopy[e.target.name] = e.target.value;

        console.log('event value =', e.target.value)

        setFilterData(filterDataCopy)

        console.log({filterDataCopy})

        filterProducts(filterDataCopy)
    }

    const handlClearFilter = (params) => {
        setFilterData(initialFormFilterValues)
        clearFilter()
    }

    return (
        <>
            <h2>This is the Product Filter.</h2>
            <form action="">
                <label>Filter by Name</label>
                <input type="text" value={filterData.name} name="name" onChange={handleFilterFormChange}/>
                <label>Filter by Category</label>
                <input type="text" value={filterData.category} name="category" onChange={handleFilterFormChange}/>
            </form>
            <button onClick={handlClearFilter}>Clear Filter</button>
        </>
    )
}