import React, { useEffect, useState } from "react";
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
import AdminMenuOrders from "./AdminMenuOrders";
import AdminMenuProducts from "./AdminMenuProducts";
import axios from "axios";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [modified, setModified] = useState({});

  useEffect(() => {
    axios
      .get(`/api/cart/history`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [modified]);

  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ pt: "20px" }}
    >
      <Grid item xs={11} sx={{ width: "100%" }}>
        <Typography variant="h5" sx={{ mb: "35px", mt: "10px" }}>
          Historial de compras
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID de usuario</TableCell>
                <TableCell align="left">ID de orden</TableCell>
                <TableCell align="left">Productos</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.orderItems[0].userId}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {order.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <AdminMenuProducts products={order.orderItems} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <AdminMenuOrders
                      stat={order.status}
                      id={order.id}
                      setModified={setModified}
                    />
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

export default AdminOrders;
