export const initialState = {
    navActive: window.location.pathname
}
export const actions = {
    ACTIVE_NAV_LINK : "active_nav_link"
}

const reducer = (state, action) => {
    console.log(action, "in reducer fir")
    switch (action.type){
        case actions.ACTIVE_NAV_LINK:{
            console.log(action.item,"in reducer")
            return {
                ...state,
                navActive: action.item
            }
        }
        default:
            return state
    }
}

export default reducer

