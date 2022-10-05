import { useEffect } from "react"
import { useState } from "react"
import { getProducts } from "../helpers/productService"

export const useProducts = (params) => {
    // set state - list of products
    const [products, setProducts] = useState(null)

    // fetch list of products & set state
    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data)
        })
    },[])

    // 1. define a function called addProductToState
    // 2. pass an argument to it - new product
    // 3. create a copy of the current list of products (... spread)
    // 4. add new product to copied list of products
    // 5. use setProducts method to set new copied list of products as products state
    const addProductToState = (newProduct) => {
        const copyProducts = [...products,newProduct]
        setProducts(copyProducts)
    }

    const filterProducts = (name) => {
        console.log('Name in useProducts:', name)

        // 1. loop through a copied list of products
        // const copyProductList = [...products]
        // 2. within the loop, compare name with name on each product
        // EXAMPLE FILTER
        // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
        // const result = words.filter(word => word.length > 6);
        // console.log(result);

        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(name.toLowerCase())) 
        // 3. set filtered list of products in the state
        console.log({filteredProducts})
        setProducts(filteredProducts)
    }
    

    // return products
    return { products, addProductToState, filterProducts }
}