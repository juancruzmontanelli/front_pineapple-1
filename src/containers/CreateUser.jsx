import React from "react";
// import FormControl from "@mui/material/FormControl";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";

const CreateUser = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <h1>Crear cuenta</h1>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="name">Nombre</InputLabel>
            <Input id="name" type="text" aria-describedby="name-helper" />
            <FormHelperText id="name-helper">Nombre y apellido</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" aria-describedby="email-helper" />
            <FormHelperText id="email-helper">
              Dirección de correo electrónico
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="password">Contraseña</InputLabel>
            <Input
              id="password"
              type="password"
              aria-describedby="password-helper"
            />
          </FormControl>
        </Grid>

        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="password">Confirma tu contraseña</InputLabel>
            <Input
              id="password"
              type="password"
              aria-describedby="password-helper"
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <Button variant="contained" color="success">
            Continuar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateUser;

{
  /* <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Crear Usuario
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Crear Usuario</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Para crear
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div> */
}
