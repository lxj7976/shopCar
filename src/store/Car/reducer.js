import _state from "./state"
const reducer = (state=_state,action)=>{
    var newState ={...state};
    if(action.type==="ADD"){
        newState.list.push({
            id:++newState.count,
            name:action.name,
            price:action.price,
            count:1
        })
    }
    if(action.type==="INC"){
        newState.list.forEach((item)=>{
            if(item.id===action.id){
                item.count++
            }
        })
    }
    if(action.type==="DEC"){
        newState.list.forEach((item)=>{
            if(item.id===action.id){
                if(item.count>1){
                    item.count--
                }
            }
        })
    }
    return newState;
}
export default reducer;