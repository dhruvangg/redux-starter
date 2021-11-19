export const bugAdded = (description) => ({
    type: "BUG_ADDED",
    payload: { description }
})

export const bugResolved = id => ({
    type: "BUG_REMOVED",
    payload: { id }
})

export const bugRemoved = id => ({
    type: "BUG_RESOLVED",
    payload: { id }
})
