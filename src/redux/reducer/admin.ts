import {
    GET_ORDERS,
    GET_ORDERS_BY_ID,
    GET_ORDERS_BY_STATE,
    PUT_STATE_TO_ORDER,
} from '../action/types'

const initialState: any = {
    products : [],
    users : [],
    searchUser : [],
    orders: [],
    order: {},
    orderState: {},
    isAdmin: false,
};

function admin(state = initialState, action : any){
    switch(action.type){
        case "ALL_PRODUCTS":
            return{
                ...state,
                products : action.payload
            };
        case "GET_PRODUCT_BY_NAME":
            return {
                ...state,
                products: action.payload,
            };
        case "GET_ALL_USERS":
            return {
                ...state,
                users : action.payload.users,
            };
        case "GET_USER_BY_NAME":
            const filterUser: any = state.users.filter((user: any) =>
                user.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            return {
                ...state,
                searchUser: filterUser,
            };
        case GET_ORDERS:
            return {
                ...state,
                orders : action.payload,
            };
        case "GET_ORDERS_BY_ID":

            return {
                ...state,
                order : action.payload,
            };
        case GET_ORDERS_BY_STATE:
            console.log("desde reducers GET_ORDERS_BY_STATE", action.payload)
            return {
                ...state,
                orders : action.payload,
            };
        case "IS_ADMIN":
            return{
                ...state,
                isAdmin : action.payload
            }

        default:
            return state;
    };
};

export default admin;