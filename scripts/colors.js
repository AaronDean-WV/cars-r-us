import { getColors, setColor } from "./database.js"
const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const carColor = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = colors.map(color => {
        return `<li>
            <input type="radio" name="color" value="${color.id}" /> ${color.color}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}