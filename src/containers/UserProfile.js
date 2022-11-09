import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  TextField,
  Box,
  Button,
  FormHelperText,
  FormControl,
  Alert,
  Fade,
} from "@mui/material";
import AlertUserDelete from "../components/AlertUserDelete";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { setUser } from "../state/user";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyIcon from "@mui/icons-material/Key";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const UserProfile = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const user = useSelector((state) => state.user);
  const [isValidPass, setIsValidPass] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [pass, setPass] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    isValidEmail && isValidPass ? (
      axios
        .put(`/api/user/update`, { name, email, address, pass })
        .then((response) => {
          dispatch(setUser(response.data));
          setShowAlert(true);
        })
        .catch((error) => {
          alert("Revise los datos ingresados");
        })
    ) : (
      <FormHelperText error>Datos incorrectos</FormHelperText>
    );
  };

  return (
    <>
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
      >
        <Grid xs={12} item width="80%">
          <Typography sx={{ mt: "5%", mb: "5%" }} variant="h4">
            Mi cuenta
          </Typography>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <PermIdentityOutlinedIcon sx={{ mr: "2%" }} />
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Información de tu cuenta
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Editá tu nombre, domicilio o email
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <FormControl>
                  <TextField
                    value={name}
                    sx={{ mb: "2%" }}
                    id="outlined-required"
                    placeholder="Nombre"
                    onChange={handleName}
                  />
                </FormControl>

                <FormControl>
                  <TextField
                    value={email}
                    sx={{ mb: "2%" }}
                    id="outlined-required"
                    placeholder="Email"
                    onChange={handleEmail}
                  />
                  {!isValidEmail && (
                    <FormHelperText error>
                      Dirección de correo incorrecta
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl>
                  <TextField
                    value={address}
                    sx={{ mb: "2%" }}
                    id="outlined-required"
                    placeholder="Domicilio"
                    onChange={handleAddress}
                  />
                </FormControl>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <KeyIcon sx={{ mr: "2%" }} />
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Cambiá tu contraseña
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Modificá tu contraseña en cualquier momento
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <TextField
                  sx={{ mb: "2%" }}
                  id="outlined-required"
                  placeholder="Contraseña nueva"
                  type="password"
                  onChange={handlePass}
                />
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <HeartBrokenIcon sx={{ mr: "2%" }} />
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Desactivá tu cuenta
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Te vamos a extrañar :(
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <AlertUserDelete />
              </Box>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid
          xs={12}
          item
          marginBottom="10%"
          display="flex"
          justifyContent="right"
          marginTop="5%"
        >
          <Box display='flex' flexDirection='column'>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            sx={{
              bgcolor: "#ed7203",
              color: "black",
              height: "50%",
              width: "100%",
              mb: 2,
              "&:hover": {
                backgroundColor: "#cf6a0e",
                color: "black",
              },
            }}
          >
            Actualizar mi perfil
          </Button>
          <Box sx={{mt:'20px'}}>
            {showAlert && (
              <Fade in={showAlert} timeout={1000}>
                <Alert>Usuario actualizado</Alert>
              </Fade>
            )}
          </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default UserProfile;
