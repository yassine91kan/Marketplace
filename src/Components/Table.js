import React from "react";
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';






export default function BasicTable() {



		const StyledTableCell = styled(TableCell)(({ theme }) => ({
				  [`&.${tableCellClasses.head}`]: {
				    backgroundColor: theme.palette.common.white,
				    color: theme.palette.common.black,
				  },
				  [`&.${tableCellClasses.body}`]: {
				    fontSize: 13,
				  },
				}));

				const StyledTableRow = styled(TableRow)(({ theme }) => ({
				  '&:nth-of-type(odd)': {
				    backgroundColor: theme.palette.action.hover,
				  },
				  // hide last border
				  '&:last-child td, &:last-child th': {
				    border: 0,
				  },
				}));



		function createData(name, calories, fat, carbs, protein) {
			  return { name, calories, fat, carbs, protein };
			}

			const rows = [
			  createData('Frozen yoghurt', 'Ottawa', 6.0, 24, 'Fonda Excavation'),
			  createData('Ice cream sandwich', 'Toronto', 9.0, 37, 4.3),
			  createData('Eclair', 'Toronto', 16.0, 24, 6.0),
			  createData('Cupcake', 'Toronto', 3.7, 67, 4.3),
			  createData('Gingerbread', 'Toronto', 16.0, 49, 3.9),
			];




  return (


        <div className="tabtab">
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Soil</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Owner</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}