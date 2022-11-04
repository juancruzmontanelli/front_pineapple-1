import {
  Grid,
  Typography,
  TextField,
  Box,
  Button,
  Rating,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";


const Comments = ( { product } ) => {
  const [rating, setRating] = useState();
  const [commit, setCommit] = useState(); //comentario posteado
  const [comments,setComments] = useState([]) // comentarios recibidos

  useEffect(() => {
    axios
      .get(`/api/comment/${product.url}`)
      .then((res) => setComments(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [product.url]);

  const handleComment = (e) => {
    setCommit(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };
console.log(product.id)
  //falta sumar el userId y el productId al post
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/comment/${product.url}`, { rating, commit })
      .then((userRating) => setCommit(userRating.data))
      .catch((err) => console.log(err));
  };

  let suma = 0;
  let promedio = 0;

    for (let i = 0; i < comments.length; i++) {
      suma += comments[i].rating;
    }
  
  promedio = (suma / comments.length).toFixed(2);

  return (
    <>
      <Grid container display={"flex"}>
        <Grid item xs={12}>
          <Box
            component="form"
            sx={{ width: "100%" }}
            noValidate
            autoComplete="off"
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            alignItems={"center"}
            paddingBottom={7}
          >
            <Typography component="legend">¿Cómo lo valorarías?</Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={handleRating}
              sx={{ mb: "10px" }}
            />

            <TextField
              id="outlined-multiline-static"
              placeholder="Dejanos tu comentario"
              multiline
              rows={6}
              sx={{
                fieldset: { borderColor: "#ed7203" },
                width: "50%",
              }}
              onChange={handleComment}
            />
            <Button
              type="submit"
              sx={{
                width: "10%",
                marginTop: "10px",
                bgcolor: "#ed7203",
                color: "black",
                mb: 2,
                "&:hover": {
                  backgroundColor: "#cf6a0e",
                  color: "black",
                },
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              Enviar
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display={'flex'} flexDirection={'column'} justifyContent='center' alignItems={'center'}>
            <Typography marginBottom={1} marginRight={5} variant="h6">
              OPINIONES DEL PRODUCTO
            </Typography>
            <Box display={'flex'} flexDirection={'column'} justifyContent='center' alignItems={'center'}>
              <Typography variant="h4">{promedio ? (promedio): ("")}</Typography>
              
              <Rating
                readOnly
                name="simple-controlled"
                value={promedio}
                sx={{ mb: "10px" }}
              />
              <Typography variant="h8">({comments.length} valoraciones)</Typography>
            </Box>
          </Box>
        </Grid>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width="100%"
          marginTop={5}
        >
          <Box>
            <Grid
              marginBottom={10}
              marginLeft={3}
              item
              xs={12}
              display="flex"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {comments.map((comment, index) => (
                <>
                  <Rating
                    readOnly
                    name="simple-controlled"
                    value={comment.rating}
                    sx={{ mb: "10px" }}
                  />
                  <Typography key={index}>
                    <strong>{comment.name}</strong>
                  </Typography>
                  <Typography
                    align={"justify"}
                    justifyContent="center"
                    key={index}
                  >
                    {comment.commit}
                  </Typography>
                </>
              ))}
            </Grid>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Comments;
