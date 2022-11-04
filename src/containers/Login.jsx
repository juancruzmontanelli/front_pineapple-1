import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
} from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";

const Login = () => {
  const dispatch = useDispatch();
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [isValidPass, setIsValidPass] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

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
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        })
    ) : (
      <FormHelperText error>Datos incorrectos</FormHelperText>
    );
  };

  const handleEmail = (e) => {
    let emailInput = e.target.value;
    setEmail(e.target.value);
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    regex.test(emailInput) ? setIsValidEmail(true) : setIsValidEmail(false);
  };

  const handlePass = (e) => {
    let passInput = e.target.value;
    setPass(passInput);
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/g;
    regex.test(passInput) ? setIsValidPass(true) : setIsValidPass(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={3}
      >
        <h1>Iniciar sesión</h1>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="name">Correo electrónico</InputLabel>
            <Input
              required
              id="email"
              type="email"
              aria-describedby="email-helper"
              onChange={handleEmail}
            />
            {isValidEmail ? (
              <FormHelperText> Correo electrónico</FormHelperText>
            ) : (
              <FormHelperText error>
                Dirección de correo incorrecta
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item md={12}>
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
              <FormHelperText>Ingrese su contraseña </FormHelperText>
            ) : (
              <FormHelperText error>
                Debe tener al menos 6 caracteres,
                <br /> una mayúscula, una minúscula,
                <br />
                un número y un caracter especial
              </FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item md={12}>
          <Button variant="contained" color="success" type="submit">
            Continuar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
