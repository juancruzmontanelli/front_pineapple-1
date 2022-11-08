import React, { useState, useEffect } from "react";
import Comments from "../components/Comments";
import axios from "axios";
import {
  Grid,
  Typography,
  Button,
  Box,
  Tab,
  FormControl,
  InputLabel,
  Input,
  TextField,
  Fade,
  Alert,
} from "@mui/material";
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
import { useDispatch, useSelector } from "react-redux";
import { BorderStyle } from "@mui/icons-material";


//QUE SE VEA EL PRODUCTO PANTALLA WIDTH 50%
// AGREGAR EN LA OTRA MITAD UN FORM CON LOS CAMPOS
//HACER UNA COPIA DEL ESTADO Y QUE SE VEA EN EL FORM ANTERIOR
//LA MODIFICACIONES EN EL FORM QUE SE VEAN EN LA PANTALLA PROD

const UpdateProduct = () => {
  // const [value, setValue] = React.useState("1");
  //   const [product, setProduct] = useState(null);

  //   const { id } = useParams();
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const id= 16
    // useEffect(() => {
    //   axios
    //     .get(`/api/products/${id}`)//.get(`/api/products/${id}`)
    //     .then((res) => setProduct(res.data))
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, [id]);

  
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("ESTE ES EL PAYLOAD QUE SE ENVIARA AL BACK:", );
    // axios
    //   .post("/api/products/update/:name", [{ ...}])
    //   .then(() => {
    //     setShowAlert(true);
    //   })
    //   .catch((error) => {
    //     alert("Revise los datos ingresados");
    //   });
   
  };



  const product = {
    id: "0",
    img: "https://inversionesczhn.com/wp-content/uploads/2020/10/OnePlus-7T-Pro-5G-McLaren-2-550x550-1-1.jpg",
    brand: "OnePlus",
    model: "7T Pro McLaren Edition",
    batteryCapacity: "4086",
    screenSize: "6.67",
    resolutionX: "1444",
    resolutionY: "3120",
    processor: "8",
    ram: "12000",
    internalStorage: "256.0",
    rearCamera: "48.0",
    frontCamera: "16.0",
    operatingSystem: "Android",
    numberOfSims: "2",
    price: "711.85",
  };



  const handleUpdateProduct = (e) => {
    const { id, value } = e.target;
    
  };

  return (
    <>
      {showAlert && (
        <Fade in={showAlert} timeout={6000}>
          <Alert>Product Updated!</Alert>
        </Fade>
      )}
      <Grid
        container
        spacing={-2}
        style={{ width: "100%", BorderStyle: "dashed", borderColor: "black" }}
      >
        <Grid item xs={12}>
          {" "}
          TITULO
        </Grid>

        <Grid
          item
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          sx={{ m: 2 }}
        >
          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="img"
              defaultValue={product.img}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="brand"
              defaultValue={product.brand}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="model"
              defaultValue={product.model}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="batteryCapacity"
              defaultValue={product.batteryCapacity}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="screenSize"
              defaultValue={product.screenSize}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="resolutionX"
              defaultValue={product.resolutionX}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="resolutionY"
              defaultValue={product.resolutionY}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="processor"
              defaultValue={product.processor}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="ram"
              defaultValue={product.ram}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="internalStorage"
              defaultValue={product.internalStorage}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="rearCamera"
              defaultValue={product.rearCamera}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="frontCamera"
              defaultValue={product.frontCamera}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="operatingSystem"
              defaultValue={product.operatingSystem}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="numberOfSims"
              defaultValue={product.numberOfSims}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-read-only-input"
              label="price"
              defaultValue={product.price}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>

        <Grid item display="flex" flexDirection="column">
          <Grid item xs={6}>
            <TextField
              id="img"
              label="img"
              defaultValue={product.img}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="brand"
              label="brand"
              defaultValue={product.brand}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="model"
              label="model"
              defaultValue={product.model}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="batteryCapacity"
              label="batteryCapacity"
              defaultValue={product.batteryCapacity}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="screenSize"
              label="screenSize"
              defaultValue={product.screenSize}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="resolutionX"
              label="resolutionX"
              defaultValue={product.resolutionX}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="resolutionY"
              label="resolutionY"
              defaultValue={product.resolutionY}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="processor"
              label="processor"
              defaultValue={product.processor}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="ram"
              label="ram"
              defaultValue={product.ram}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="internalStorage"
              label="internalStorage"
              defaultValue={product.internalStorage}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="rearCamera"
              label="rearCamera"
              defaultValue={product.rearCamera}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="frontCamera"
              label="frontCamera"
              defaultValue={product.frontCamera}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="operatingSystem"
              label="operatingSystem"
              defaultValue={product.operatingSystem}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="numberOfSims"
              label="numberOfSims"
              defaultValue={product.numberOfSims}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="price"
              label="price"
              defaultValue={product.price}
              InputProps={{
                readOnly: false,
              }}
              onChange={handleUpdateProduct}
            />
          </Grid>

          <Grid item md={12}>
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UpdateProduct;

{
  /* <Grid item md={6}>
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
<TextField
  id="outlined-read-only-input"
  label="name"
  defaultValue={product.name}
  InputProps={{
    readOnly: true,
  }}
/>
   </Grid> */
}

//    <Grid
//   item
//   xs={6}
//   // display="flex"
//   // flexDirection="column"
//   // justifyContent="space-evenly"
// >
// <TextField
//   id="outlined-read-only-input"
//   label="name"
//   defaultValue={product.name}
//   InputProps={{
//     readOnly: true,
//   }}
// />
//    </Grid>
