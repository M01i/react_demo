const initialState = {
    goods:{}
}

export default (state = initialState, { type, p }) => {
    switch (type) {

    case "GOODS":
        console.log(p)
        return { ...state, goods:p }

    default:
        return state
    }
}
