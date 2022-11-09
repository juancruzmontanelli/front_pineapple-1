import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import axios from "axios";

export default function AlertConvertAdmin({ id }) {
  const [open, setOpen] = React.useState(false);
 
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
      .put(`/api/user/update`, {})
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        sx={{ width: "100%" }}
        onClick={handleClickOpen}
        startIcon={<AdminPanelSettingsIcon />}
      >
        Convertir a admin
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
