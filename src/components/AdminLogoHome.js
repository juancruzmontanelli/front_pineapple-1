import { Grid } from "@mui/material";
import React from "react";
import logoPineappleAdmin from "../assets/Logo-Pineapple-Admin.png";

const AdminLogoHome = () => {
  return (
      <Grid display='flex' justifyContent='center' alignContent='center' flexDirection='row' item xs={12} sx={{ width: "100%" }}>
        <img
          src={logoPineappleAdmin}
          alt="logo pineapple"
          height='100%'
          style={{marginTop:'15%'}}
        />
      </Grid>
  );
};

export default AdminLogoHome;
