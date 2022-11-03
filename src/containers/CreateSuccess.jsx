import React from "react";
import logoPineapple from "../assets/logopineapple2.png";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const CreateSuccess = () => {
  return (
    <>
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={3}
      >
        <img src={logoPineapple} alt="logo_company" />
        <Grid item md={12}>
          <h1>Usuario creado con éxito</h1>
        </Grid>
        <Grid item md={12}>
          <h3>Has click en el siguiente botón para ir al menú principal:</h3>
        </Grid>
        <Grid item md={12}>
          <Link to={"/"}>
            <Button variant="contained" color="success">
              <HomeIcon /> Menú principal
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateSuccess;
