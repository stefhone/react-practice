export const getProducts = () => {
    return fetch('http://localhost:3000/products')
        .then((res) => {
            return res.json()
        })
} 

// 1. create function called postProducts
// 2. pass it argument of newProduct
// 3. return the outcome from a fetch (a promise)
// 4. pass 1st argument as URL
// 5. pass object as 2nd argument to the fetch, denoting it's a post
// 6. Get result back from DB
// 7. Return as JSON
export const postProducts = (newProduct) => {
    return fetch('http://localhost:3000/products', 
    {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
      }

    ).then((res) => res.json())
}