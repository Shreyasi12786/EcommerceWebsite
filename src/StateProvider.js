import { CheckCircle } from "@material-ui/icons";
import { createContext, React, useContext, useReducer} from "react";

export const StateContext =createContext();

export const StateProvider =({reducer, initialState, children})=>(
<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);