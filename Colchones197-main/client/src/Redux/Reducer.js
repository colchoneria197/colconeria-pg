import { GET_ALL_PRODUCTS } from './Actions/get_products';

const initialState = {
    products: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        default: return state;
    }
}
export default reducer;