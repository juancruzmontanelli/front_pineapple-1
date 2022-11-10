import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import axios from "axios";
import { Box, Grid, Pagination } from "@mui/material";

import ProductItem from "../commons/ProductItem";

const HomeProducts = () => {
  const initialStatePagination = {
    totalPages: null,
    currentPage: 1,
  };
  const [pagination, setPagination] = useState(initialStatePagination);
  const [products, setProducts] = useState([]);

  const { type } = useParams();
  const [searchParams] = useSearchParams();
  const { model, min, max, str } = Object.fromEntries([...searchParams]);

  let data = products;
  let api_url = `/api/products?`;
  if (type === "brand") api_url = `/api/search/filter?model=${model}`;
  if (type === "products") api_url = `/api/search?str=${str}`;
  if (type === "price") api_url = `/api/search/filter?min=${min}&max=${max}`;

  useEffect(() => {
    setPagination(initialStatePagination);
    // eslint-disable-next-line
  }, [type, str, min, max, model]);

  useEffect(() => {
    axios
      .get(`${api_url}&page=${pagination.currentPage}`)
      .then((res) => {
        setProducts(res.data.products);
        if (pagination.totalPages === null)
          setPagination({ ...pagination, totalPages: res.data.totalPages });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pagination, type, model, min, max, str, api_url]);

  const handlePagination = (e, value) => {
    setPagination({ ...pagination, currentPage: value });
  };

  return (
    <Grid item xs={9}>
      <Grid container spacing={2}>
        {data.map((product, index) => (
          <ProductItem data={product} key={index} />
        ))}
        {pagination.totalPages > 1 && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              pt: "20px",
              pb: "30px",
            }}
          >
            <Pagination
              count={pagination.totalPages || 0}
              page={pagination.currentPage}
              onChange={handlePagination}
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default HomeProducts;
