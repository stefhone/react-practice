import { ProductListItem } from "./ProductListItem"

export const ProductList = ({products}) => {
    
    // const {id, name, category, price, stock} = product

    return (
        <>
            <h2>This is the Product List component</h2>
            <ul>
                {
                    products?.map((product) => <ProductListItem key={product.id} product={product}/>)               
                }
            </ul> 
        </>
    )
}