const database = {
    colors: [ 
        {id: 1, color: "Silver", price: 33},
        {id: 2, color: "Midnight Blue", price: 45},
        {id: 3, color: "Firebrick Red", price: 47},
        {id: 4, color: "Spring Green", price: 1000000}],
    
    interiors: [
        {id: 1, type: "Beige Fabric", price: 700},
        {id: 2, type: "Charcoal Fabric", price: 650},
        {id: 3, type: "White Leather", price: 900},
        {id: 4, type: "Black Leather", price: 1200}],

    technologies: [
        {id : 1, type: "Basic Package", price: 0},
        {id : 2, type: "Navigation Package", price: 150},
        {id : 3, type: "Visibility Package", price: 250},
        {id : 4, type: "Ultra Package", price: 350}],
        
    wheels: [
        {id : 1, type: "17-inch Pair Radial", price: 230},
        {id : 2, type: "17-inch Pair Radial Black", price: 350},
        {id : 3, type: "18-inch Pair Spoke Silver", price: 500},
        {id : 4, type: "18-inch Pair Spoke Black", price: 600}
    ],

    customOrders: [
        {id: 1, colorId: 4, interiorId: 3, technologyId: 2, wheelId: 2, timestamp: 1645653215}
    ],

    orderBuilder: {}

    
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}


export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
    
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
