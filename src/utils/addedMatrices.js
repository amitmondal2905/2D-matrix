const addMatrices = (matrixA, matrixB) => {
  if (!matrixA || !matrixB) return [];
  if (
    matrixA.length !== matrixB.length ||
    matrixA[0].length !== matrixB[0].length
  ) {
    throw new Error("Matrices must be of the same dimensions");
  }

  return matrixA.map((row, i) => row.map((cell, j) => cell + matrixB[i][j]));
};

export default addMatrices;
