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

    // return products
    return { products }
}