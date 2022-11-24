export const markerReducer=(state=[],action)=>{
    if(action.type==='markerLocation') {
     return [action.data,...state]
    }
    else{
     return state
    }
 }