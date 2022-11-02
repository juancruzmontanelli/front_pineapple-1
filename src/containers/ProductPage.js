import React from "react";
import Comments from "../components/Comments";
import { Grid, Typography, Button, Box, Tab } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import SdStorageOutlinedIcon from "@mui/icons-material/SdStorageOutlined";
import DeveloperBoardOutlinedIcon from "@mui/icons-material/DeveloperBoardOutlined";
import BatteryChargingFullOutlinedIcon from "@mui/icons-material/BatteryChargingFullOutlined";
import SimCardOutlinedIcon from "@mui/icons-material/SimCardOutlined";
import SettingsCellOutlinedIcon from "@mui/icons-material/SettingsCellOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const ProductPage = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            style={{ width: "75%", marginTop: 20 }}
            alt=""
            src="https://tienda.personal.com.ar/_next/image?url=https%3A%2F%2Ftienda.personal.com.ar%2Fimages%2FS22_Ultra_FIT_min_dbaf5f0eac.png&w=1080&q=75"
          />
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          {" "}
          <Box>
            <Typography variant="h3" color="initial">
              Samsung Galaxy A33 5G
            </Typography>
            <Typography variant="h4" color="initial">
              <strong>$ 68.399</strong>
            </Typography>
          </Box>
          <Box display={"flex"}>
            <SdStorageOutlinedIcon fontSize="large" />
            <Typography paddingLeft={1} variant="h6" color="initial">
              Almacenamiento: 128 GB
            </Typography>
          </Box>
          <Box display={"flex"}>
            <CheckCircleOutlinedIcon fontSize="large" />
            <Typography paddingLeft={1} variant="h6" color="green">
              Stock disponible
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection="column">
            <Button
              sx={{
                bgcolor: "#ed7203",
                color: "black",
                width: "40%",
                mb: 2,
                "&:hover": {
                  backgroundColor: "#cf6a0e",
                  color: "black",
                },
              }}
              width="50%"
              variant="contained"
            >
              Comprar ahora
            </Button>
            <Button
              sx={{
                bgcolor: "#ed7203",
                color: "black",
                width: "40%",
                "&:hover": {
                  backgroundColor: "#cf6a0e",
                  color: "black",
                },
              }}
              endIcon={<LocalGroceryStoreIcon />}
              variant="contained"
            >
              Agregar al carrito
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography
            gutterBottom
            align={"justify"}
            justifyContent="center"
            variant="body1"
            color="initial"
            marginTop={5}
            paddingLeft={25}
            paddingRight={25}
          >
            <strong>Sobre este producto:</strong> Te presentamos el Samsung
            Galaxy A33 con un procesador Octa-Core (2,4GHz, 2GHz) para que estés
            al día con todas las aplicaciones y juegos de última generación.
            Descubrí todas las posibilidades para tus fotos, tanto de día como
            de noche, con la cámara de 48+8+5+2 MP. Memoria interna de 128 GB y
            expandible con una MicroSd hasta 1TB.
          </Typography>
        </Grid>

        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems="center"
          sx={{ width: "100%", typography: "body1", mt: 5, mb: 5 }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Características destacadas" value="1" />
                <Tab label="Más info del producto" value="2" />
                <Tab label="Legales" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Box
                display="flex"
                justifyContent={"space-between"}
                flexDirection="row"
              >
                <Box padding={2}>
                  <DeveloperBoardOutlinedIcon fontSize="large" />
                  <Typography>
                    <strong>PROCESADOR</strong>
                  </Typography>
                  <Typography>Octa-Core (2,4GHz, 2GHz)</Typography>
                </Box>
                <Box padding={2}>
                  <SdStorageOutlinedIcon fontSize="large" />
                  <Typography>
                    <strong>ALMACENAMIENTO</strong>
                  </Typography>
                  <Typography>128 GB</Typography>
                </Box>
                <Box padding={2}>
                  <CameraAltOutlinedIcon fontSize="large" />
                  <Typography>
                    <strong>CÁMARAS</strong>
                  </Typography>
                  <Typography>Frontal 13 MP / Trasera 48+8+5+2 MP</Typography>
                </Box>
                <Box padding={2}>
                  <AspectRatioOutlinedIcon fontSize="large" />
                  <Typography>
                    <strong>TAMAÑO DE PANTALLA</strong>
                  </Typography>
                  <Typography>6.4" + FHD+ - SuperAmoled</Typography>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <Box
                display="flex"
                justifyContent={"space-between"}
                flexDirection="row"
              >
                <Box padding={2}>
                  <SettingsCellOutlinedIcon fontSize="large" />
                  <Typography>
                    <strong>ESPECIFICACIONES TÉCNICAS</strong>
                  </Typography>
                  <Typography>
                    <strong>Sistema operativo:</strong> Android 11
                  </Typography>
                  <Typography>
                    <strong>Procesador:</strong> Octa-Core (1.6GHz, 1.8GHz)
                  </Typography>
                  <Typography>
                    <strong>RAM:</strong> 4 GB
                  </Typography>
                  <Typography>
                    <strong>Memoria:</strong> 128 GB
                  </Typography>
                </Box>
                <Box padding={2}>
                  <BatteryChargingFullOutlinedIcon fontSize="large" />
                  <Typography>
                    <strong>BATERÍA</strong>
                  </Typography>
                  <Typography>Capacidad: 5000 mAh</Typography>
                </Box>
                <Box padding={2}>
                  <SimCardOutlinedIcon fontSize="large" />
                  <Typography>
                    <strong>TARJETA SIM</strong>
                  </Typography>
                  <Typography>Cantidad: 2</Typography>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="3">
              <Typography
                display="flex"
                justifyContent="center"
                alignItems={"center"}
                paddingLeft={25}
                paddingRight={25}
                align={"justify"}
              >
                OFERTA DE ALCANCE NACIONAL EXCEPTO LA PROVINCIA DE TIERRA DEL
                FUEGO, EXCLUSIVA PARA TIENDA PINEAPPLE. VÁLIDA PARA SEGMENTO
                INDIVIDUOS DESDE EL 31/10/2022 HASTA EL 02/12/2022 O HASTA
                AGOTAR STOCK LO QUE SUCEDA PRIMERO EN TERMINALES SELECCIONADOS.
                ORIGEN: ARGENTINA. PRECIOS PARA CONSUMIDOR FINAL IVA INCLUIDO.
                EL PRECIO FINAL CON EL DESCUENTO APLICADO SE VERÁ REFLEJADO
                ANTES DE CONFIRMAR EL PAGO. FINANCIACIÓN: 6 CUOTAS SIN INTERÉS
                EN LA COMPRA DE EQUIPOS ABONANDO CON TARJETAS DE CRÉDITO VISA,
                MASTERCARD, AMERICAN EXPRESS Y CABAL, EMITIDAS EN ARGENTINA.
                COSTO FINANCIERO TOTAL (C.F.T.): 0%; TASA NOMINAL ANUAL
                (T.N.A.): 0%; TASA EFECTIVA ANUAL (T.E.A.) 0%. PINEAPPLE
                ARGENTINA S.A.
              </Typography>
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
      <Comments />
    </>
  );
};

export default ProductPage;
