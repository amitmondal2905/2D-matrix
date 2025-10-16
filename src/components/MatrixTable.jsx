import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const MatrixTable = ({ matrix, title }) => {
  const colCount = matrix[0]?.length || 0;

  return (
    <TableContainer component={Paper} sx={{ marginBottom: 4, boxShadow: 3 }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ padding: 2, backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        {title}
      </Typography>
      <Table aria-label={`${title} table`}>
        <TableHead sx={{ backgroundColor: "grey.200" }}>
          <TableRow>
            <TableCell>#</TableCell>
            {[...Array(colCount)].map((_, idx) => (
              <TableCell key={idx} align="center" sx={{ fontWeight: 'bold' }}>
                {idx}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {matrix.map((row, i) => (
            <TableRow
              key={i}
              sx={{
                backgroundColor: i % 2 === 0 ? "grey.50" : "white",
                "&:hover": { backgroundColor: "grey.100" },
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                {i}
              </TableCell>
              {row.map((cell, j) => (
                <TableCell key={j} align="center" sx={{ padding: '8px 16px' }}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MatrixTable;
