import React, { useEffect } from "react";
import {
  Grid,
  Button,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AlertsAdminDelete from "./AlertsAdminDelete";
import { useNavigate } from "react-router";

const AdminOrders = () => {

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`edit/${e.target.value}`);
  };

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
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Producto</TableCell>
                <TableCell align="right">Eliminar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      value={product.url}
                      onClick={handleEdit}
                      size="small"
                      variant="contained"
                      startIcon={<EditIcon />}
                    >
                      Editar
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <AlertsAdminDelete url={product.url} />
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
