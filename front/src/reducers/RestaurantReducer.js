import data from "../data/data.json"

const INITIAL_STATE = {
    restaurant: data.restaurants
}

function RestaurantReducer(state = INITIAL_STATE, action){
    return state;
}

export default RestaurantReducer;