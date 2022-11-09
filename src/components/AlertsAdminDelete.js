import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AlertsAdminDelete({ id, url }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteUser = (e) => {
    setOpen(false);

    e.preventDefault();

    axios
      .delete(`/api/user/${id}/delete`)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteProduct = (e) => {
    setOpen(false);

    e.preventDefault();

    axios
      .delete(`/api/products/delete/${url}/`)
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
        sx={{
          width: "100%",
          background: "red",
          "&:hover": {
            backgroundColor: "#880808",
            color: "white",
          },
        }}
        onClick={handleClickOpen}
        startIcon={<DeleteIcon />}
      >
        Eliminar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {id?(  <DialogTitle id="alert-dialog-title">
          ¿Estás seguro/a de que deseás eliminar esta cuenta?
        </DialogTitle>):(<DialogTitle id="alert-dialog-title">
          ¿Estás seguro/a de que deseás eliminar este producto?
        </DialogTitle>)}
        
        <DialogActions>
          {id ? (
            <Button onClick={handleDeleteUser}>Estoy seguro/a</Button>
          ) : (
            <Button onClick={handleDeleteProduct}>Estoy seguro/a</Button>
          )}

          <Button onClick={handleClose} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
