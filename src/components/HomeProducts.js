import { Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../commons/ProductItem";
import axios from "axios";
import { setProducts } from "../state/products";
import { useLocation, useParams } from "react-router";
import { ModelTraining } from "@mui/icons-material";

const HomeProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const searchProducts = useSelector((state) => state.products.search);
  const filterBrandProducts = useSelector(
    (state) => state.products.filterBrand
  );
  const filterPriceProducts = useSelector(
    (state) => state.products.filterPrice
  );
  const queryURL = useLocation().search;
  const model = new URLSearchParams(queryURL).get("model");
  const min = new URLSearchParams(queryURL).get("min");
  const max = new URLSearchParams(queryURL).get("max");
  const str = new URLSearchParams(queryURL).get("str");
  const { type } = useParams();
  const initialStatePagination = {
    totalPages: null,
    currentPage: 1,
  };
  const [pagination, setPagination] = useState(initialStatePagination);
  /*
`/api/search/filter?model=${event.target.value}` Brand
`/api/search/filter?min=${event.target.value}&max=${event.target.name}` Precio
  */
  let api_url = `/api/products?a=1`;

  let data = products;
  if (type === "brand") api_url = `/api/search/filter?model=${model}`;
  if (type === "products") api_url = `/api/search?str=${str}`;
  if (type === "price") api_url = `/api/search/filter?min=${min}&max=${max}`;

  useEffect(() => {
    setPagination(initialStatePagination);
  }, [type, str, min, max, model]);

  useEffect(() => {
    axios
      .get(`${api_url}&page=${pagination.currentPage}`)
      .then((res) => {
        dispatch(setProducts(res.data.products));
        if (pagination.totalPages === null)
          setPagination({ ...pagination, totalPages: res.data.totalPages });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, pagination, type, model, min, max, str]);

  const handlePagination = (e, value) => {
    setPagination({ ...pagination, currentPage: value });
  };

  return (
    <Grid item xs={9}>
      <Grid container spacing={2}>
        {data.map((product, index) => (
          <ProductItem data={product} key={index} />
        ))}
        {pagination.totalPages > 1 ? (
          <Pagination
            count={pagination.totalPages || 0}
            page={pagination.currentPage}
            onChange={handlePagination}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default HomeProducts;
