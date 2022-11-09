import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Button,
  FormControl,
  TextField,
  Fade,
  Alert,
  OutlinedInput,
  FormHelperText,
  Typography,
} from "@mui/material";
import { useParams } from "react-router";

const UpdateProduct = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [productUpdated, setProductUpdated] = useState({});

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => {
        return setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/products/update/${product.url}`, productUpdated)
      .then(() => {
        setShowAlert(true);
      })
      .catch((error) => {
        alert("Revise los datos ingresados");
      });
  };

  const handleUpdateProduct = (e) => {
    const { id, value } = e.target;
    setProductUpdated({ ...productUpdated, [id]: value });
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
        <Grid
          item
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          xs={ 6 } 
        >
           <Typography variant="h6" fontWeight="bold" textTransform="uppercase" textAlign="left" >Producto seleccionado</Typography>
          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="img"
                value={product.img || ""}
                aria-describedby="outlined-img-helper-text"
                inputProps={{
                  "aria-label": "img",
                }}
              />
              <FormHelperText id="outlined-img-helper-text">img</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="brand"
                value={product.brand || ""}
                aria-describedby="outlined-brand-helper-text"
                inputProps={{
                  "aria-label": "brand",
                }}
              />
              <FormHelperText id="outlined-brand-helper-text">
                brand
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="model"
                value={product.model || ""}
                aria-describedby="outlined-img-helper-text"
                inputProps={{
                  "aria-label": "model",
                }}
              />
              <FormHelperText id="outlined-model-helper-text">
                model
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="batteryCapacity"
                value={product.batteryCapacity || ""}
                aria-describedby="outlined-batteryCapacity-helper-text"
                inputProps={{
                  "aria-label": "batteryCapacity",
                }}
              />
              <FormHelperText id="outlined-batteryCapacity-helper-text">
                batteryCapacity
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="screenSize"
                value={product.screenSize || ""}
                aria-describedby="outlined-screenSize-helper-text"
                inputProps={{
                  "aria-label": "screenSize",
                }}
              />
              <FormHelperText id="outlined-screenSize-helper-text">
                screenSize
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="resolutionX"
                value={product.resolutionX || ""}
                aria-describedby="outlined-resolutionX-helper-text"
                inputProps={{
                  "aria-label": "resolutionX",
                }}
              />
              <FormHelperText id="outlined-resolutionX-helper-text">
                resolutionX
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="resolutionY"
                value={product.resolutionY || ""}
                aria-describedby="outlined-resolutionY-helper-text"
                inputProps={{
                  "aria-label": "resolutionY",
                }}
              />
              <FormHelperText id="outlined-resolutionY-helper-text">
                resolutionY
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="processor"
                value={product.img || ""}
                aria-describedby="outlined-processor-helper-text"
                inputProps={{
                  "aria-label": "processor",
                }}
              />
              <FormHelperText id="outlined-processor-helper-text">
                processor
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="ram"
                value={product.ram || ""}
                aria-describedby="outlined-ram-helper-text"
                inputProps={{
                  "aria-label": "ram",
                }}
              />
              <FormHelperText id="outlined-ram-helper-text">ram</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="internalStorage"
                value={product.internalStorage || ""}
                aria-describedby="outlined-internalStorage-helper-text"
                inputProps={{
                  "aria-label": "internalStorage",
                }}
              />
              <FormHelperText id="outlined-internalStorage-helper-text">
                internalStorage
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="rearCamera"
                value={product.rearCamera || ""}
                aria-describedby="outlined-rearCamera-helper-text"
                inputProps={{
                  "aria-label": "rearCamera",
                }}
              />
              <FormHelperText id="outlined-rearCamera-helper-text">
                rearCamera
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="frontCamera"
                value={product.frontCamera || ""}
                aria-describedby="outlined-frontCamera-helper-text"
                inputProps={{
                  "aria-label": "frontCamera",
                }}
              />
              <FormHelperText id="outlined-frontCamera-helper-text">
                frontCamera
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="operatingSystem"
                value={product.operatingSystem || ""}
                aria-describedby="outlined-operatingSystem-helper-text"
                inputProps={{
                  "aria-label": "operatingSystem",
                }}
              />
              <FormHelperText id="outlined-operatingSystem-helper-text">
                operatingSystem
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="numberOfSims"
                value={product.numberOfSims || ""}
                aria-describedby="outlined-numberOfSims-helper-text"
                inputProps={{
                  "aria-label": "numberOfSims",
                }}
              />
              <FormHelperText id="outlined-numberOfSims-helper-text">
                numberOfSims
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="price"
                value={product.price || ""}
                aria-describedby="outlined-price-helper-text"
                inputProps={{
                  "aria-label": "price",
                }}
              />
              <FormHelperText id="outlined-price-helper-text">
                price
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item display="flex" flexDirection="column" xs={ 6 }>
        <Typography variant="h6" fontWeight="bold" textTransform="uppercase" textAlign="left" >Cambios</Typography>
          <Grid item xs={6}>
            <TextField
              id="img"
              label="img"
              defaultValue={product.img || ""}
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
              defaultValue={product.brand || ""}
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
                width: "33%",
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
