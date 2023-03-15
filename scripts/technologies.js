import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const carTechnologies = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = technologies.map(technology => {
        return `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}