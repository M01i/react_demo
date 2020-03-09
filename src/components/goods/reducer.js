const initialState = {
    buy_number:1
}

export default (state = initialState, { type, p }) => {
    switch (type) {
    case "ADD":
        var newState = JSON.parse(JSON.stringify(state));
        if(newState.buy_number>=p)return newState
        newState.buy_number += 1
        return newState
    case "DEL":
        var newState = JSON.parse(JSON.stringify(state));
        if(newState.buy_number<=0)return newState
        newState.buy_number -= 1
        return newState

    default:
        return state
    }
}
