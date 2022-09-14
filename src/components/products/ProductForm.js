import { useForm } from "../../hooks/useForm"

export const ProductForm = () => {

    const initialFormValues = {
        name: "", category: "", price: "", stock: ""
    }

    const {formData, handleFormChange, handleFormSubmit} = useForm('', initialFormValues)

    const {name, category, price, stock} = formData

    console.log({formData})

    return (
        <>
            <h2>Product Form</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={handleFormChange}/>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" value={category} onChange={handleFormChange}/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" value={price} onChange={handleFormChange}/>
                </div>
                <div>
                    <label htmlFor="stock">Stock</label>
                    <input type="number" name="stock" value={stock} onChange={handleFormChange}/>
                </div>
            </form>
        </>
    )
}