// import store from "../store"
// let actions = {
//     inc(){
//         store.dispatch({
//             type:'INC'
//         })
//     }
// }
// export default actions
export default {
    inc(n){
        console.log("Inc");
        return {
            type:'INC',
            n
        }
    },
    asyncinc(){
        console.log('ayncInc')
        return (dispatch)=>{
            setTimeout(()=>{
                dispatch({
                    type:"INC"
                })
            },3000)
        }
    }
}