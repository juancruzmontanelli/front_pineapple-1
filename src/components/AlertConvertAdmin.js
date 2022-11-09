import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

import { useSelector } from "react-redux";

export default function AlertConvertAdmin({ id,isAdmin }) {
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => state.user);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    setOpen(false);

    e.preventDefault();

    axios
      .put(`/api/user/promoteAdmin`, {id,isAdmin})
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  if(isAdmin) {
    return (
        <div>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "100%" }}
            onClick={handleClickOpen}
         
          >
            Remove Admin
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              ¿Estás seguro/a de que deseás quitarle a este usuario los permisos de
              administrador?
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleSubmit}>Estoy seguro/a</Button>
              <Button onClick={handleClose} autoFocus>
                Cancelar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
  } else {
    return (
        <div>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "100%" }}
            onClick={handleClickOpen}
          >
            Add Admin
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              ¿Estás seguro/a de que deseás convertir a este usuario en
              administrador?
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleSubmit}>Estoy seguro/a</Button>
              <Button onClick={handleClose} autoFocus>
                Cancelar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
  }

  
}
