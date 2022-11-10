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
import { useSelector } from "react-redux";

const Comments = ({ product }) => {
  const [rating, setRating] = useState();
  const [commit, setCommit] = useState(); //comentario posteado
  const [comments, setComments] = useState({ comments: [] }); // comentarios recibidos
  const user = useSelector((state) => state.user);

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
  
  //falta sumar el userId y el productId al post
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/comment/${product.url}`, { rating, commit })
      .then((userRating) => setCommit(userRating.data))
      .catch((err) => console.log(err));
  };


  return (
    <>
      <Grid container display={"flex"}>
        {user.loggedIn && (
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
        )}
        {comments.promedio > 0 ? (
          <>
            <Grid item xs={12}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Typography marginBottom={1} marginRight={5} variant="h6">
                  OPINIONES DEL PRODUCTO
                </Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Typography variant="h4">
                    {Number(comments.promedio) > 0 ? Number(comments.promedio) : ""}
                  </Typography>

                  <Rating
                    readOnly
                    name="simple-controlled"
                    value={Number(comments.promedio)}
                    sx={{ mb: "10px" }}
                  />
                  <Typography variant="subtitle1">
                    (Cantidad de valoraciones: {comments.comments.length})
                  </Typography>
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
                  {comments.comments.map((comment) => (
                    <Box key={comment.id}>
                      <Rating
                        readOnly
                        name="simple-controlled"
                        value={comment.rating}
                        sx={{ mb: "10px" }}
                      />
                      <Typography key={comment.id}>
                        <strong>{comment.name}</strong>
                      </Typography>
                      <Typography
                        align={"justify"}
                        justifyContent="center"
                      >
                        {comment.commit}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
              </Box>
            </Box>
          </>
        ) : (
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            marginBottom="50px"
          >
            <Typography variant="h5">
              ¡Sé el primero en valorar este producto!
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Comments;
