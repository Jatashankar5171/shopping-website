import { combineReducers } from "redux"

const initCart = {
    totalCount:0,
    items : []
}

function cartReducer(state=initCart,action){
    let found = 0;
    let temp = []
    switch(action.type){
        case 'ADD_TO_CART' :
            if(state.totalCount===0){
                return state = {totalCount:state.totalCount+1,items:[...state.items,{item:action.payload,count:1}]}
            }
            else{
                state.items.forEach((cur)=>{
                    if(cur.item.id===action.payload.id){
                        found=found+1
                        temp.push({item:cur.item,count:cur.count+1,total:cur})
                    }
                    else{
                        temp.push(cur)
                    }
                })
                if(found===0)temp.push({item:action.payload,count:1})
                console.log(temp);
                return state = {totalCount:state.totalCount+1,items:temp}
            }
        case 'INC_COUNT':
            state.items.forEach((cur)=>{
                if(cur.item.id===action.payload){
                    temp.push({item:cur.item,count:cur.count+1})
                }
                else{
                    temp.push(cur)
                }
            })
            return state = {totalCount:state.totalCount+1,items:temp}
        case 'DEC_COUNT': 
            state.items.forEach((cur)=>{
                if(cur.item.id===action.payload){
                    if(cur.count===1){
                        console.log('remove item');
                    }
                    else{
                        temp.push({item:cur.item,count:cur.count-1})
                    }
                }
                else{
                    temp.push(cur)
                }
            })
            return state = {totalCount:state.totalCount-1,items:temp}
        case 'CHECKOUT' : return state = initCart
        default : return state
    }
}
function productReducer(state=null,action){
    switch(action.type){
        case 'FETCH_RESULT': return state = action.payload
        default : return state
    }
}
const rootReducer = combineReducers({cart:cartReducer,product:productReducer})

export default rootReducer
