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

    // return products
    return { products, addProductToState }
}