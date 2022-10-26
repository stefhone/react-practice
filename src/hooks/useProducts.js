import { useEffect } from "react"
import { useState } from "react"
import { getProducts } from "../helpers/productService"

export const useProducts = (params) => {
    // set state - list of products
    const [products, setProducts] = useState(null)
    const [resetFilter, setResetFilter] = useState(false)

    // fetch list of products & set state
    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data)
        })
    },[resetFilter])

    // 1. define a function called addProductToState
    // 2. pass an argument to it - new product
    // 3. create a copy of the current list of products (... spread)
    // 4. add new product to copied list of products
    // 5. use setProducts method to set new copied list of products as products state
    const addProductToState = (newProduct) => {
        const copyProducts = [...products,newProduct]
        setProducts(copyProducts)
    }

    const filterProducts = (productObject) => {
        console.log('productObject in useProducts:', productObject)

        // 1. loop through a copied list of products
        // const copyProductList = [...products]
        // 2. within the loop, compare name with name on each product
        // EXAMPLE FILTER
        // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
        // const result = words.filter(word => word.length > 6);
        // console.log(result);

        // EXAMPLE WITH SINGLE STRING
        // const filteredProducts = products.filter(product => product.name.toLowerCase().includes(name.toLowerCase())) 

        // EXAMPLE WITH OBJECT
        // 1. change argument name to something more appropriate
        // 2. create array of keys on the object that is passed
        
        const productObjectKeys = Object.keys(productObject)
        console.log({productObjectKeys});
        // 3. loop over the products, then foreach product, loop over the keys, using each key to compare the
        // the product we're on in our list to the values of the object passed into the current function we're in (filterProducts)

        const filteredProducts = products.filter((product) => {
            return productObjectKeys.every((productObjectKey) => {
                console.log('Square notation product value:', product[productObjectKey])
                return product[productObjectKey].toLowerCase().includes(productObject[productObjectKey].toLowerCase())
            })
        })
        // 3. set filtered list of products in the state
        console.log({filteredProducts})
        setProducts(filteredProducts)
    }
    
    const clearFilter = (params) => {
        console.log("Clear Filter")
        setResetFilter(!resetFilter)
    }

    // return products
    return { products, addProductToState, filterProducts, clearFilter }
}