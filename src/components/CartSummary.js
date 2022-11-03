import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const CartSummary = () => {
  return (
    <Grid xs={4} item>
      <Card sx={{ p: "10px", backgroundColor: "#fafafa" }}>
        <CardContent>
          <Typography variant="h5" component="span">
            Resumen de la compra
          </Typography>
          <Divider sx={{ my: "10px" }} />
          <List disablePadding={true}>
            <ListItem
              disablePadding={true}
              disableGutters={true}
              secondaryAction={<Typography>$120.870</Typography>}
            >
              <ListItemText>Subtotal </ListItemText>
            </ListItem>

            <ListItem
              disablePadding={true}
              disableGutters={true}
              secondaryAction={<Typography>GRATIS</Typography>}
            >
              <ListItemText>Costo de envío </ListItemText>
            </ListItem>

            <Divider sx={{ mt: "10px" }} />
            <ListItem
              disableGutters={true}
              secondaryAction={
                <Typography variant="h6" component="span">
                  $120.870
                </Typography>
              }
            >
              <ListItemText>
                <Typography variant="h6" component="span">
                  Total
                </Typography>{" "}
              </ListItemText>
            </ListItem>
          </List>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="large" variant="contained">
            Continuar compra
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CartSummary;
