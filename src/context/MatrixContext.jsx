import React, { useReducer } from "react";

import MatrixCreateContext from "./MatrixCreateContext";
import { matrixReducer } from "./MatrixReducer";



const initialState = {rows: 0, cols: 0, matrices: []};

const MatrixProvider = ({children}) => {
    const [state, dispatch] = useReducer(matrixReducer, initialState);

    return(
        <MatrixCreateContext.Provider value={{state, dispatch}}>
            {children}
        </MatrixCreateContext.Provider>
    )
};

export default MatrixProvider;