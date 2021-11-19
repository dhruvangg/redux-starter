import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";
// const unsubscribe = 
store.subscribe(() => {
    const bugs = store.getState()
    const bugLayout = bugs.map(el => {
        return `<li class="${el.resolved && "solved"}"><input  type="checkbox" name="resolved" value="${el.id}"/> ${el.description} <span data-id="${el.id}">X</span></li>`
    });
    document.querySelector(".bug--wrapper").innerHTML = bugLayout.join("")
})

store.dispatch(bugResolved(1))

// unsubscribe();

// store.dispatch(bugRemoved)

document.querySelector("#NEW_BUG").addEventListener("submit", e => {
    e.preventDefault();
    const description = e.target.description.value
    store.dispatch(bugAdded(description))
})


