import { carInteriors } from "./interiors.js"
import { carTechnologies } from "./technologies.js"
import { Orders } from "./order.js"
import { carColor } from "./colors.js"
import { carWheels } from "./wheels.js"
import { addCustomOrder } from "./database.js"
document.addEventListener(
    "click",
    (event) => { 
        const itemClicked = event.target
        if (itemClicked.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const carsRUs= () => {
    return  `
        <h1>Cars-R-Us</h1>
        <article class="choices">
            <section class="choices__colors options">
                <h2>Colors</h2>
                ${carColor()}
            </section>
            <section class="choices__sizes options">
                <h2>Interior</h2>
                ${carInteriors()}
            </section>
            <section class="choices__styles options">
                <h2>Technologies</h2>
                ${carTechnologies()}
            </section>
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${carWheels()}
            </section>
        </article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <article class="customrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}