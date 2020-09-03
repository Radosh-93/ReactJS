export const increment = (nr = 1) => ({
    type: 'INCREMENT',
    payload: nr
})
export const decrement = (nr = 1) => ({
    type: 'DECREMENT',
    payload: nr
})