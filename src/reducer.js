export const initialState = {
    navActive: window.location.pathname
}
export const actions = {
    ACTIVE_NAV_LINK: "active_nav_link"
}

const reducer = (state, action) => {
    switch (action.type) {
        case actions.ACTIVE_NAV_LINK: {
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

