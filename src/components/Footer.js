import React from "react";
import {
  Box,
  Container,
  styled,
  Link,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material/";

const Footer = () => {
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  return (
    <footer style={{bottom: 0, width:'100%'}}>
      <Box
        px={{ xs: 2, sm: 4 }}
        py={{ xs: 2, sm: 4 }}
        bgcolor="black"
        color="white"
      >
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1} color='#ed7203'><Typography variant="h7" color="#ed7203">CONFIANZA EN TUS COMPRAS</Typography></Box>
              <Box>
                <Link
                  href="https://www.argentina.gob.ar/servicio/iniciar-un-reclamo-ante-la-direccion-nacional-de-defensa-del-consumidor-y-arbitraje-del"
                  target="_blank"
                  color="inherit"
                  underline="none"
                >
                  <Typography variant="h7" color="white">
                    Defensa de las y los Consumidores. Para reclamos ingresá acá
                  </Typography>
                </Link>
              </Box>
              <Box>
                <Link
                  href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/305000-309999/305484/texact.htm"
                  target="_blank"
                  color="inherit"
                  underline="none"
                >
                  <Typography variant="h7" color="white">
                    Reglamento de cliente servicios TIC
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1} color='#ed7203'><Typography variant="h7" color="#ed7203">SEGUINOS</Typography></Box>
              <SocialBox>
                <Link href=""
                  target="_blank">
               <IconButton sx={{color:'#ed7203'}} href>
               <Facebook />
               </IconButton>
               </Link>
               <Link href=""
                  target="_blank">
               <IconButton sx={{color:'#ed7203'}} href>
               <Twitter />
               </IconButton>
               </Link>
               <Link href=""
                  target="_blank">
               <IconButton sx={{color:'#ed7203'}} href>
               <Instagram />
               </IconButton>
               </Link>
              </SocialBox>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 3, sm: 7 }} pb={{ xs: 5, sm: 0 }}>
            Copyright {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
