import React,{useReducer, useContext} from "react";

export const StateContext = React.createContext();

export const StateProvider = ({reducer, initialState, children})=> (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStatevalue = ()=> useContext(StateContext);