import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AlertsAdminDelete({ id, url, name, setModified }) {
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
      .then((res) => {
        setModified({ id });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteProduct = (e) => {
    setOpen(false);

    e.preventDefault();

    axios
      .delete(`/api/products/delete/${url}/`)
      .then((res) => {
        setModified({ id });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteBrand = (e) => {
    setOpen(false);

    e.preventDefault();

    axios
      .delete(`/api/brand/delete/${name}/`)
      .then(() => {
        setModified({ name });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (id) {
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
          Delete
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            ¿Estás seguro/a de que deseás eliminar esta cuenta?
          </DialogTitle>

          <DialogActions>
            <Button onClick={handleDeleteUser}>Estoy seguro/a</Button>

            <Button onClick={handleClose} autoFocus>
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  } else if (url) {
    return (
      <div>
        <Button
          variant="contained"
          size="small"
          sx={{
            width: "70%",
            background: "red",
            "&:hover": {
              backgroundColor: "#880808",
              color: "white",
            },
          }}
          onClick={handleClickOpen}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            ¿Estás seguro/a de que deseás eliminar este producto?
          </DialogTitle>

          <DialogActions>
            <Button onClick={handleDeleteProduct}>Estoy seguro/a</Button>

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
          sx={{
            width: "50%",
            background: "red",
            "&:hover": {
              backgroundColor: "#880808",
              color: "white",
            },
          }}
          onClick={handleClickOpen}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            ¿Estás seguro/a de que deseás eliminar esta marca?
          </DialogTitle>

          <DialogActions>
            <Button onClick={handleDeleteBrand}>Estoy seguro/a</Button>

            <Button onClick={handleClose} autoFocus>
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
