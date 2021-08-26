const products = [
    {
    id: 1,
    name: "Биг Тейсти",
    price: 6,
    currency: "euro",
    ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
    type: "burger",
    available: true
    },
    {
    id: 2,
    name: "Тройной чизбургер",
    price: 2.3,
    currency: "usd",
    ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
    type: "burger",
    available: true
    },
    {
    id: 3,
    name: "Чизбургер",
    price: 1,
    currency: "euro",
    ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
    type: "burger",
    available: true
    },
    {
    id: 4,
    name: "Картофель фри",
    price: 2,
    currency: "usd",
    ingredients: ["potato"],
    type: "snack",
    available: true
    },
    {
    id: 5,
    name: "Картофель по-деревенски",
    price: 2,
    currency: "usd",
    ingredients: ["potato"],
    type: "snack",
    available: false
    },
    {
    id: 6,
    name: "Чикен МакНаггетс™",
    price: 5,
    currency: "euro",
    ingredients: ["chicken"],
    type: "chicken",
    available: true
    },
    {
    id: 7,
    name: "Стрипсы",
    price: 2.6,
    currency: "euro",
    ingredients: ["chicken"],
    type: "chicken",
    available: false
    },
    {
    id: 8,
    name: "МакЧикен",
    price: 4.3,
    currency: "euro",
    ingredients: ["chicken", "flour", "cheese", "sauce"],
    type: "burger",
    available: false
    }
]

const userOptions = [
    {
    id: 1,
    ingredient: "flour",
    active: true
    },
    {
    id: 2,
    ingredient: "beef",
    active: false
    },
    {
    id: 3,
    ingredient: "cheese",
    active: true
    },
    {
    id: 4,
    ingredient: "sauce",
    active: true
    },
    {
    id: 5,
    ingredient: "cucumber",
    active: true
    },
    {
    id: 6,
    ingredient: "chicken",
    active: false
    },
    {
    id: 7,
    ingredients: "potato",
    active: true
    },
    {
    id: 8,
    ingredients: "salad",
    active: true
    }
] 


//Part 1:
//1.
const ingredients = products.reduce( (acc, { ingredients }) => [...new Set([...acc, ...ingredients])], [] )
console.log(ingredients)

//2.
filterById = (mass, id) => { return mass.filter(element => element.id === id) }
console.log(...filterById(products, 8))
//or
const preduceById = (mass, id) =>
    mass.reduce((acc, mass) => {
    if(id === mass.id) return (acc = mass) 
    return acc
}, {})
console.log(preduceById(products, 8))

//3.
const sortByPrice = products.sort((a, b) => a.price - b.price)
console.log(sortByPrice)

//4.
const groupByTypes = products.reduce((acc, array) => {
    if(!acc[array.type]) return { ...acc, [array.type]: [array] }
    return { ...acc, [array.type]: [...acc[array.type], array] }
}, {})
console.log(groupByTypes)

//5.
const filterByAvailable = products.filter(element => element.available)
console.log(filterByAvailable)
//or
const reduceByAvailable = products.reduce((acc, array) => {
    if(array.available) return [...acc, array]
    return acc
}, [])
console.log(reduceByAvailable)

//6.
const filterByIngredient = (mass, str) => { return mass.filter(element => element.ingredients.includes(str)) }
console.log(filterByIngredient(products, "sauce"))
//or
const reduceByIngredient = (mass, str) =>
    mass.reduce((acc, element) => {
    if(element.ingredients.includes(str)) return [...acc, element]
    return acc
}, [])
console.log(reduceByIngredient(products, "sauce"))

//7.
const filterByIngredients = (massOfProducts, massOfIngredients) => { return massOfProducts.filter(element => [...new Set([...element.ingredients, ...massOfIngredients])].join() === element.ingredients.join()) }
console.log(filterByIngredients(products, ["cheese", "sauce"]))
//or
const reduceByIngredients = (massOfProducts, massOfIngredients) =>
    massOfProducts.reduce((acc, element) => {
    if([...new Set([...element.ingredients, ...massOfIngredients])].join() === element.ingredients.join()) return [...acc, element]
    return acc
}, [])
console.log(reduceByIngredients(products, ["cheese", "sauce"]))

//8.
const filterByPrice = (mass, num) => { return mass.filter(element => element.price <= num) }
console.log(filterByPrice(products, 4))
//or
const reduceByPrice = (mass, num) =>
    mass.reduce((acc, element) => {
    if(element.price <= num) return [...acc, element]
    return acc
}, [])
console.log(reduceByPrice(products, 4))

//9.
const reduceByIds = (massOfProducts, massOfIds) =>
    massOfProducts.reduce( (acc, element) => {
        const currencyValue = () => {
            if(element.currency === "euro") return '€'
            if(element.currency === "usd") return '$'
        }
        if(massOfIds.includes(element.id)) return `${acc} ${element.name}: цена ${element.price}${currencyValue()},`
        return acc
}, '')
console.log(reduceByIds(products, [8, 1, 5]))

//10.

//11.

//Part 2:
//1.

//2.
const reduceByOptionsIngridients = (massOfProducts, massOfOptions) => {
    const falseIngridients = massOfOptions.reduce( (acc, { ingredient, active }) => (!active ? [...acc, ingredient] : acc), [])
    return massOfProducts.reduce( (acc, product) => (!product.ingredients.some( (ingredient) => falseIngridients.includes(ingredient)) ? [...acc, product] : acc), [])
}
console.log(reduceByOptionsIngridients(products, userOptions))
//3.


//4.
const reduceByProductsOrIngridients = (massOfProducts, string) => (
    massOfProducts.reduce( (acc, product) => (
        product.name.includes(string) || product.ingredients.some( (ingredient) => ingredient.includes(string) ) ? [...acc, product] : acc
    ), [])
)
console.log(reduceByProductsOrIngridients(products, "бург"))
console.log(reduceByProductsOrIngridients(products, "chee"))