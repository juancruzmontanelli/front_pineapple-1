import axios from "axios";
import { loadState } from "../utils/browserStorage";

const userIsLogged = () => {
  return loadState()?.user.id;
};

const getItems = async () => {
  if (!userIsLogged()) return;
  return axios.get("/api/cart/items").then((res) => res.data);
};

const addItem = async (productData) => {
  if (!userIsLogged()) return;
  return axios.post("/api/cart", productData).then((res) => res.data);
};

const updateQuantity = async (productId, type, quantity) => {
  if (!userIsLogged()) return;
  return axios
    .put(`/api/cart/${productId}`, { quantity })
    .then((res) => res.data);
};

const deleteItem = async (productId) => {
  if (!userIsLogged()) return;
  return axios.delete(`/api/cart/${productId}`).then((res) => res.data);
};

const finishOrder = () => {
  return axios.post("api/cart/buy").then((res) => res.data);
};

const mergeCart = () => {
  if (!userIsLogged()) return;
  const localData = loadState();
  axios
    .post("api/cart/multiProducts", { products: localData.cart })
    .then((res) => res.data)
    .then(({ items }) => {
      return items.map((item) => {
        return { ...item.product, quantity: item.quantity };
      });
    });
};

export const cartService = {
  getItems,
  addItem,
  updateQuantity,
  deleteItem,
  finishOrder,
  mergeCart,
};
