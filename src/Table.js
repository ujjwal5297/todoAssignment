import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { listItemSecondaryActionClasses } from "@mui/material";
import Button from "@mui/material/Button";

export default function DenseTable({
  todoList,
  setSelectedIndex,
}) {
  const onClickItem = (item, index) => {
    setSelectedIndex(index);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>ToDo ID</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Title
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Status
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todoList?.map((item, index) => (
            <TableRow
              key={item.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="center">{item.title}</TableCell>
              <TableCell align="center">
                {item.completed == true ? "Complete" : "Incomplete"}
              </TableCell>
              <TableCell
                onClick={() => onClickItem(item, index)}
                align="center"
              >
                <Button variant="outlined">View User</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
