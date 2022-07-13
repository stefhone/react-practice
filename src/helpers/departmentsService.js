export const getDepartments = (params) => {
    return fetch('http://localhost:3000/departments')
    .then(res => res.json())
}