import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";
import { mergeCart } from "../state/cart";
import { isEmail, isValidPassword } from "../utils/validation";

const Login = () => {
  const dispatch = useDispatch();
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
        .post("/api/user/login", {
          email: email,
          pass: pass,
        })
        .then((response) => {
          dispatch(setUser(response.data));
          dispatch(mergeCart());
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 401)
            return setBackError([{ msg: "Email o contraseña inválidos" }]);

          setBackError(error.response.data.errors);
        })
    ) : (
      <FormHelperText error>Datos incorrectos</FormHelperText>
    );
  };

  const handleEmail = (e) => {
    let emailInput = e.target.value;
    setEmail(e.target.value);
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
          Iniciar sesión
        </Typography>
        {backError.length > 0 && (
          <Box>
            <Alert severity="error">{backError[0].msg}</Alert>
          </Box>
        )}
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
            <FormHelperText>Ingresá tu correo electrónico</FormHelperText>
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
            <FormHelperText>Ingresá tu contraseña </FormHelperText>
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
          sx={{
            bgcolor: "#ed7203",
            mb: 10,
            mt: 5,
            color: "black",
            width: "100%",
            "&:hover": {
              backgroundColor: "#cf6a0e",
              color: "black",
            },
          }}
          onClick={handleSubmit}
          variant="contained"
          color="success"
          type="submit"
        >
          Continuar
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
