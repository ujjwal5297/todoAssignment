import { Box, Typography } from "@mui/material";
import React from "react";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function UserDetails({
  userDetails,
  selectedTitle,
  selectedUserId,
}) {
  // console.log('userDetails: ', userDetails);
  return (
    <Box
      border="none"
      sx={{
        width: 500,
        height: 267,
        backgroundColor: "white",
        ml: "50px",
        padding: "10px",
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        <Table sx={{ border: 1 }}>
          <TableRow>
            <TableHead sx={{ fontWeight: "bold" }}>TODO ID</TableHead>
            <TableCell>{userDetails?.id}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead sx={{ fontWeight: "bold" }}>TODO Title</TableHead>
            <TableCell>{selectedTitle}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead sx={{ fontWeight: "bold" }}>UserID</TableHead>
            <TableCell>{selectedUserId}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead sx={{ fontWeight: "bold" }}>Name</TableHead>
            <TableCell>{userDetails?.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableHead sx={{ fontWeight: "bold" }}>Email</TableHead>
            <TableCell>{userDetails?.email}</TableCell>
          </TableRow>
        </Table>
      </Typography>
    </Box>
  );
}
