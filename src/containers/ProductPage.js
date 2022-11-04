import React, { useState, useEffect } from "react";
import Comments from "../components/Comments";
import axios from "axios";
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
import { useParams, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addProduct } from "../state/cart";

const ProductPage = () => {
  const [value, setValue] = React.useState("1");
  const [product, setProduct] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        id,
        title: product.name,
        img: product.img,
        price: product.price,
      })
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            style={{ width: "75%", marginTop: 20 }}
            alt=""
            src={product.img}
          />
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Box>
            <Typography variant="h3" color="initial">
              {product.name}
            </Typography>
            <Typography variant="h4" color="initial">
              <strong>US$ {product.price}</strong>
            </Typography>
          </Box>
          <Box display={"flex"}>
            <SdStorageOutlinedIcon fontSize="large" />
            <Typography paddingLeft={1} variant="h6" color="initial">
              Almacenamiento: {product.internalStorage} GB
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
              onClick={handleBuyNow}
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
              onClick={handleAddToCart}
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
            <strong>Sobre este producto:</strong> {product.description}
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
                    <strong>PROCESADORES</strong>
                  </Typography>
                  <Typography>Cantidad: {product.processor}</Typography>
                </Box>
                <Box padding={2}>
                  <SdStorageOutlinedIcon fontSize="large" />
                  <Typography>
                    <strong>ALMACENAMIENTO</strong>
                  </Typography>
                  <Typography>{product.internalStorage} GB</Typography>
                </Box>
                <Box padding={2}>
                  <CameraAltOutlinedIcon fontSize="large" />
                  <Typography>
                    <strong>CÁMARAS</strong>
                  </Typography>
                  <Typography>
                    Frontal {product.frontCamera} MP / Trasera{" "}
                    {product.rearCamera} MP
                  </Typography>
                </Box>
                <Box padding={2}>
                  <AspectRatioOutlinedIcon fontSize="large" />
                  <Typography>
                    <strong>TAMAÑO DE PANTALLA</strong>
                  </Typography>
                  <Typography>{product.screenSize}</Typography>
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
                    <strong>Sistema operativo:</strong>{" "}
                    {product.operatingSystem}
                  </Typography>
                  <Typography>
                    <strong>Procesadores:</strong> Cantidad: {product.processor}
                  </Typography>
                  <Typography>
                    <strong>RAM:</strong> {product.ram} GB
                  </Typography>
                  <Typography>
                    <strong>Memoria:</strong> {product.internalStorage} GB
                  </Typography>
                </Box>
                <Box padding={2}>
                  <BatteryChargingFullOutlinedIcon fontSize="large" />
                  <Typography>
                    <strong>BATERÍA</strong>
                  </Typography>
                  <Typography>
                    Capacidad: {product.batteryCapacity} mAh
                  </Typography>
                </Box>
                <Box padding={2}>
                  <SimCardOutlinedIcon fontSize="large" />
                  <Typography>
                    <strong>TARJETA SIM</strong>
                  </Typography>
                  <Typography>Cantidad: {product.numberOfSims}</Typography>
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
      <Comments product={product} />
    </>
  );
};

export default ProductPage;
