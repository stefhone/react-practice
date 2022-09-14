export const getProducts = () => {
    return fetch('http://localhost:3000/products')
        .then((res) => {
            return res.json()
        })
} 