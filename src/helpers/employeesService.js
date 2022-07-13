export const getEmployees = () => {
    return fetch('http://localhost:3000/employees')
    .then(res => res.json())
}

export const postEmployee = (newEmployee) => {
    return fetch('http://localhost:3000/employees', {
        // changed method
        method: 'POST', 
        // what type of data going to POST - json 
        headers: {
            'Content-Type': 'application/json',
        },
        // all json is valid javascript
        // but not all javascript is valid json
        // the reason being the keys
        // all json objects must have strings as keys
        
        // actual information - json.stringify converting to right format of json with keys as strings
        body: JSON.stringify(newEmployee),
        })
    .then(res => res.json())
}