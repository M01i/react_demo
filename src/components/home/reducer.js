const initialState = {
    title:[],
    banner:[],
    goods:[],
    bottom:[],
    visible:true,
    goodslist:[],
    loading:false
}

export default (state = initialState, { type, p,x,y,z}) => {
    switch (type) {
        case 'GET':
            var newState={...state};
            newState.title=p;
            newState.goods=x;
            newState.bottom=y;
            newState.banner=z;
            newState.loading=false;
            newState.visible=true;
            return newState;
        case 'CHANGE':
            var newState={...state};
            newState.goodslist=p;
            newState.visible=false;
            console.log(p)
            return newState;
        case 'L-START':
            var newState={...state};
            newState.loading=true;
            return newState;
        case 'L-END':
            var newState={...state};
            newState.loading=false;
            return newState
    default:
        return state
}
}
