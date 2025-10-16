import addMatrices from "../utils/addedMatrices";


export const matrixReducer = (state, action) => {
  switch (action.type) {
    case "SET_SIZE":
      return { ...state, rows: action.payload.rows, cols: action.payload.cols };
    case "GENERATE_MATRICES":
      return { ...state, matrices: action.payload };
    case "ADD_MATRICES": {
      const matrixA = state.matrices[0];
      const matrixB = state.matrices[1];
      const addedMatrix = addMatrices(matrixA, matrixB);
      return { ...state, addedMatrix };
    }
    default:
      return state;
  }
};
