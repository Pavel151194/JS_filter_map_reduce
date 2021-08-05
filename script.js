const defaultMass = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
        "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
        "age": 20
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg",
        "age": 40
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg",
        "age": 36
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg",
        "age": 70
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg",
        "age": 45
    }
]

//1.
const fullNames = defaultMass.map(element => `${element["first_name"]} ${element["last_name"]}`).join(', ')
console.log(fullNames)

//2.
const objAge = {
    "average": defaultMass.map(element => element["age"]).reduce((a, b) => a + b, 0) / defaultMass.length,
    "over30": defaultMass.filter(element => element["age"] > 30).length,
    "over40": defaultMass.filter(element => element["age"] > 40).length,
    "over18": defaultMass.filter(element => element["age"] > 18).length
}
console.log(objAge)

//3.
const userNamesIDs = defaultMass.map(element => {
    return {
    "id": element["id"],
    "full_name": `${element["first_name"]} ${element["last_name"]}`
}
})
console.log(userNamesIDs)

//4.
const emails = defaultMass.map(element => element["email"]).sort((a, b) => a > b ? 1 : -1)
console.log(emails)

//5.
const under40 = defaultMass.filter(element => element["age"] < 40).sort((a, b) => a["age"] > b["age"] ? 1 : -1)
console.log(under40)

//6.
const obj ={}
let keys = defaultMass.map(element => element["last_name"]).join('').replace(/[^A-Z]/g, '').split('').reduce((a, b) => a.includes(b) ? a : [...a, b]).sort((a, b) => a > b ? 1 : -1)
let values = defaultMass.map(element => element["last_name"]).sort((a, b) => a > b ? 1 : -1)

console.log(keys)
console.log(values)