export const ProductListItem = ({ product }) => {

    const { id, name, category, price, stock } = product

    return (
        <>
            <li>
                <p>Name: {name}</p>
                <p>Category: {category}</p>
                <p>Price: {price}</p>
                <p>Stock: {stock}</p>
            </li>
        </>
    )
}