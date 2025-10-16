import React, { useContext, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import MatrixCreateContext from "../context/MatrixCreateContext";

const MatrixInput = () => {
  const { dispatch } = useContext(MatrixCreateContext);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  const generateMatrices = () => {
    const sumMatrix = [];
    const productMatrix = [];
    for (let i = 0; i < rows; i++) {
      const sumRow = [];
      const productRow = [];
      for (let j = 0; j < cols; j++) {
        sumRow.push(i + j);
        productRow.push(i * j);
      }
      sumMatrix.push(sumRow);
      productMatrix.push(productRow);
    }
    dispatch({ type: "SET_SIZE", payload: { rows, cols } });
    dispatch({
      type: "GENERATE_MATRICES",
      payload: [sumMatrix, productMatrix],
    });
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, m: 3 }}>
      <TextField
        label="Rows"
        type="number"
        variant="outlined"
        value={rows}
        onChange={(e) => setRows(Number(e.target.value))}
        InputProps={{ inputProps: { min: 0 } }}
        size="small"
        
      />
      <TextField
        label="Columns"
        type="number"
        variant="outlined"
        value={cols}
        onChange={(e) => setCols(Number(e.target.value))}
        InputProps={{ inputProps: { min: 0 } }}
        size="small"

      />
      <Button variant="contained" onClick={generateMatrices}>
        Generate
      </Button>
    </Box>
  );
};

export default MatrixInput;
