import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Button,
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
import axios from "axios";
import { useNavigate } from "react-router";

const AdminBrands = () => {
  const [brands, setBrands] = useState([]);
  const [modified, setModified] = useState({});

  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`edit/${e.target.value}`);
  };

  useEffect(() => {
    axios
      .get("/api/brand")
      .then((res) => setBrands(res.data))
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
          Marcas
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Editar</TableCell>
                <TableCell align="right">Eliminar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {brands.map((brand) => (
                <TableRow
                  key={brand.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {brand.name}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      value={brand.id}
                      onClick={handleEdit}
                      size="small"
                      variant="contained"
                      startIcon={<EditIcon />}
                    >
                      Editar
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <AlertsAdminDelete
                      name={brand.name}
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

export default AdminBrands;
