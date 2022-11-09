import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AlertConvertAdmin from "./AlertConvertAdmin";
import AlertsAdminDelete from "./AlertsAdminDelete";


const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/user/all")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ pt: "20px" }}
    >
      <Grid item xs={12} sx={{ width: "100%" }}>
        <Typography variant="h5" sx={{ mb: "35px", mt: "10px" }}>
          Administrar usuarios
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Dirección</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Permisos</TableCell>
                <TableCell align="right">Eliminar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="right">{user.address}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">
                    <AlertConvertAdmin id={user.id} />
                  </TableCell>
                  <TableCell align="right">
                    <AlertsAdminDelete id={user.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default AdminUsers;
