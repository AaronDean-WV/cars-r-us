import { getOrders, getWheels, getColors, getInteriors, getTechnologies } from "./database.js"

const interiors = getInteriors()
const colors = getColors()
const wheels = getWheels()
const technologies = getTechnologies()



const buildOrderListItem = (order) => {

const foundInterior = interiors.find((interior) => {
    return interior.id === order.interiorId
    }
) 


const foundWheel = wheels.find((wheel) => {
        return wheel.id === order.wheelId
    }
)

const foundColor = colors.find((color) => {
        return color.id === order.colorId
    }
)

const foundTechnology = technologies.find((technology) => {
    return technology.id === order.technologyId
}
)


const totalCost = foundInterior.price + foundWheel.price + foundColor.price + foundTechnology.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})




    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
        Order #${order.id} Cost: ${costString}
    </li>`
}
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}