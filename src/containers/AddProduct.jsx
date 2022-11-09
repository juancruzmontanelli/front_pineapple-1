import {
  Alert,
  Button,
  Fade,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const [showAlert, setShowAlert] = useState(false);
  const initialState = {
    img: null,
    brand: null,
    model: null,
    batteryCapacity: null,
    screenSize: null,
    resolutionX: null,
    resolutionY: null,
    processor: null,
    ram: null,
    internalStorage: null,
    rearCamera: null,
    frontCamera: null,
    operatingSystem: null,
    numberOfSims: null,
    price: null,
  };

  const [product, setProduct] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/products/add", [product])
      .then(() => {
        setShowAlert(true);
      })
      .catch((error) => {
        alert("Error data to create a product");
      });
  };

  const handleProduct = (e) => {
    const { id, value } = e.target;
    setProduct({ ...product, [id]: value });
  };

  return (
    <>
      {showAlert && (
        <Fade in={showAlert} timeout={6000}>
          <Alert>Producto creado!</Alert>
        </Fade>
      )}
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={3}
      >
        <Grid item md={12}>
          <Typography sx={{ pb: 2, pt: 5 }} variant="h5">
            Agregar producto
          </Typography>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="img">Image URL</InputLabel>
            <Input required id="img" type="url" onChange={handleProduct} />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="brand">Brand</InputLabel>
            <Input required id="brand" type="text" onChange={handleProduct} />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="model">Model</InputLabel>
            <Input required id="model" type="text" onChange={handleProduct} />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="batteryCapacity">BatteryCapacity</InputLabel>
            <Input
              required
              id="batteryCapacity"
              type="text"
              onChange={handleProduct}
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="screenSize">Screen Size</InputLabel>
            <Input
              required
              id="screenSize"
              type="number"
              onChange={handleProduct}
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="resolutionX">Resolution X</InputLabel>
            <Input
              required
              id="resolutionX"
              type="number"
              onChange={handleProduct}
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="resolutionY">Resolution Y</InputLabel>
            <Input
              required
              id="resolutionY"
              type="number"
              onChange={handleProduct}
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="processor">Processor</InputLabel>
            <Input
              required
              id="processor"
              type="number"
              onChange={handleProduct}
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="ram">Ram</InputLabel>
            <Input required id="ram" type="number" onChange={handleProduct} />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="internalStorage">Internal Storage</InputLabel>
            <Input
              required
              id="internalStorage"
              type="number"
              onChange={handleProduct}
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="rearCamera">Rear Camera</InputLabel>
            <Input
              required
              id="rearCamera"
              type="number"
              onChange={handleProduct}
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="frontCamera">Front Camera</InputLabel>
            <Input
              required
              id="frontCamera"
              type="number"
              onChange={handleProduct}
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="operatingSystem">Operating System</InputLabel>
            <Input
              required
              id="operatingSystem"
              type="text"
              onChange={handleProduct}
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="numberOfSims">Number of sims</InputLabel>
            <Input
              required
              id="numberOfSims"
              type="number"
              onChange={handleProduct}
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="price">Price</InputLabel>
            <Input required id="price" type="number" onChange={handleProduct} />
          </FormControl>
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
    </>
  );
};

export default AddProduct;
