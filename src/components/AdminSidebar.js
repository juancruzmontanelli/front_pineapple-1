import { Grid, Typography, Button, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const StyledButton = styled(Button)({
    color: "black",
    justifyContent: "left",
    height: "30px",
    width: "70%",
    marginBottom: "20px",
    marginTop: "10px",
  });

  const handleAdmin = (e) => {
    e.preventDefault();
    navigate(`${e.target.value}`);
  };

  return (
    <Grid
      xs={3}
      item
      display="flex"
      flexDirection="column"
      justifyContent="left"
      alignContent="left"
    >
      <Typography sx={{ mt: "30px" }} variant="h5">
        Panel de administración
      </Typography>
      <StyledButton onClick={handleAdmin} value="users/" sx={{ mt: "40px" }}>
        Administrar usuarios
      </StyledButton>
      <StyledButton onClick={handleAdmin} value="orders/">
        Historial de compras
      </StyledButton>
      <StyledButton onClick={handleAdmin} value="products/">
        Productos
      </StyledButton>
      <StyledButton onClick={handleAdmin} value="products/new/">
        Agregar productos
      </StyledButton>
    </Grid>
  );
};

export default AdminSidebar;
