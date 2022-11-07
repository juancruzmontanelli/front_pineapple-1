import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { logOut } from "../state/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";


export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
      .delete(`/api/user/delete`)
      .then(() => {
        dispatch(logOut());
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Eliminar cuenta
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ¿Estás seguro/a de que deseás eliminar tu cuenta?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Si eliminás tu cuenta no podrás comprar nuestros productos y tu
            información será borrada.
          </DialogContentText>
        </DialogContent>
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
