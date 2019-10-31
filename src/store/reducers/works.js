export default function works(state={
    data:[],
    loading:false,
    loadEnd: false
},action){
    switch(action.type){
        case "LOAD":
            return {
                ...state,
                loading: true
            };
        case "LOADOVER":
            return {
                ...state,
                loading: false,
                data:state.data.concat(action.data) // 写网路请求时再调整。
            };
        case "LOADEND":
            return {
                ...state,
                loadEnd: true
            }
    };
    return state
}