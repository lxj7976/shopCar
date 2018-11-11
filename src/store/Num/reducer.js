import _state from "./state"
const reducer = (state=_state, action)=>{
    var newState ={...state};
    if(action.type==="INC"){
        newState.n++
    }
    return newState;
}
export default reducer