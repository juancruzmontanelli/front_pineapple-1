import React, { useState } from "react";
import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";
import { Box } from "@mui/system";
import { isEmail, isValidPassword } from "../utils/validation";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [isValidPass, setIsValidPass] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [backError, setBackError] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    isValidEmail && isValidPass ? (
      axios
        .post("/api/user/register", {
          name: name,
          address: address,
          email: email,
          pass: pass,
        })
        .then((response) => {
          navigate("/createSuccess");
        })
        .catch((error) => {
          setBackError(error.response.data.errors);
        })
    ) : (
      <FormHelperText error>Datos incorrectos</FormHelperText>
    );
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleEmail = (e) => {
    let emailInput = e.target.value;
    setEmail(emailInput);
    isEmail(emailInput) ? setIsValidEmail(true) : setIsValidEmail(false);
  };

  const handlePass = (e) => {
    let passInput = e.target.value;
    setPass(passInput);
    isValidPassword(passInput) ? setIsValidPass(true) : setIsValidPass(false);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "400px",
          gap: "15px",
        }}
      >
        <Typography sx={{ pb: 2, pt: 5 }} variant="h4">
          Crear cuenta
        </Typography>
        {backError.length > 0 && (
          <Box>
            <Alert severity="error">{backError[0].msg}</Alert>
          </Box>
        )}
        <FormControl>
          <InputLabel htmlFor="name">Nombre</InputLabel>
          <Input
            required
            id="name"
            type="text"
            aria-describedby="name-helper"
            onChange={handleName}
          />
          <FormHelperText id="name-helper">
            Elegí cómo querés que te llamemos.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="address">Domicilio</InputLabel>
          <Input
            required
            id="address"
            type="text"
            aria-describedby="address-helper"
            onChange={handleAddress}
          />
          <FormHelperText id="address-helper">
            Configurá el envío de tus compras
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="name">Email</InputLabel>
          <Input
            required
            id="email"
            type="email"
            aria-describedby="email-helper"
            onChange={handleEmail}
          />
          {isValidEmail ? (
            <FormHelperText>Recibirás información de tu cuenta.</FormHelperText>
          ) : (
            <FormHelperText error>
              Dirección de correo incorrecta
            </FormHelperText>
          )}
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="password">Contraseña</InputLabel>
          <Input
            required
            id="pass"
            type="password"
            aria-describedby="password-helper"
            onChange={handlePass}
          />
          {isValidPass ? (
            <FormHelperText>Servirá para ingresar a tu cuenta.</FormHelperText>
          ) : (
            <FormHelperText error>
              Debe tener al menos 6 caracteres,
              <br /> una mayúscula, una minúscula,
              <br />
              un número y un caracter especial
            </FormHelperText>
          )}
        </FormControl>

        <Button
          onClick={handleSubmit}
          variant="contained"
          color="success"
          type="submit"
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
        >
          Continuar
        </Button>
      </Box>
    </Box>
  );
};

export default CreateUser;
