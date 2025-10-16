import React, { useContext } from "react";

import MatrixInput from "../components/MatrixInput";
import MatrixTable from "../components/MatrixTable";
import MatrixCreateContext from "../context/MatrixCreateContext";
import { Button } from "@mui/material";

const Calculator = () => {
  const { state, dispatch } = useContext(MatrixCreateContext);

  const hasValidMatrices = 
  state.matrices &&
  state.matrices.length === 2 &&
  state.matrices.every(matrix =>
    matrix.every(row =>
      row.every(cell => cell !== null && cell !== undefined && cell !== "")
    )
  );


  return (
    <div>
      <MatrixInput />
      {hasValidMatrices && (
        <Button variant="contained" sx={{m:2}} onClick={() => dispatch({ type: "ADD_MATRICES" })}>
          Add Matrices
        </Button>
      )}
      {state.matrices.length === 2 && (
        <>
          <MatrixTable matrix={state.matrices[0]} title="Sum Matrix" />
          <MatrixTable matrix={state.matrices[1]} title="Product Matrix" />
        </>
      )}
      {state.addedMatrix && (
        <MatrixTable matrix={state.addedMatrix} title="Added Matrix" />
      )}
    </div>
  );
};

export default Calculator;
