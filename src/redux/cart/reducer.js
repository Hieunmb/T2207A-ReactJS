import CART from "./initState";
import CART_ACTION from "./action";
const cartReducer = (state = CART, action)=>{
    switch(action.type){
        case CART_ACTION.UPDATE_CART:
            return {...state,item:action.payload.items,total:action.payload.total};
        case CART_ACTION.CLEAR_CART:
            return {... state,item:[],total:0};
        default: return state;
    }
}
export default cartReducer