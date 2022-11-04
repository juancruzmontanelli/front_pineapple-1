import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CreateSuccess = () => {
  return (
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={12}>
          <Typography sx={{ pb: 2, pt: 5 }} variant="h4">
            Usuario creado con éxito
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h6">Ya podés loguearte</Typography>
        </Grid>
        <Grid item md={12}>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <Button
              sx={{
                bgcolor: "#ed7203",
                mb: 10,
                mt: 3,
                color: "black",
                width: "100%",
                "&:hover": {
                  backgroundColor: "#cf6a0e",
                  color: "black",
                },
              }}
              variant="contained"
              color="success"
            >
              Iniciar sesión
            </Button>
          </Link>
        </Grid>
      </Grid>
  );
};

export default CreateSuccess;
