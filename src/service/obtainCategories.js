import { obtainEvents } from "./obtainEvents"

export function obtainCategories(useState) {
    let categories = []

    obtainEvents().then(response => {
        let events = response.data.events
        events.forEach(event => {
            if (!categories.includes(event.category)) {
                categories.push(event.category)
            }
        });
        useState(categories)
    })

}