import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartService } from "../services/cart";

export const addProduct = createAsyncThunk(
  "cart/addProduct",
  async (data, { getState, rejectWithValue }) => {
    const state = getState().cart;
    if (state.find((prod) => prod.id === data.id)) {
      return rejectWithValue("El producto ya existe en el carrito");
    }
    console.log(data, state);

    const product = { ...data, quantity: 1 };
    return cartService
      .addItem(product)
      .then(() => product)
      .catch(() =>
        rejectWithValue("Ha ocurrido un error al añadir el producto al carrito")
      );
  }
);

export const removeProduct = createAsyncThunk(
  "cart/removeProduct",
  async (id, { rejectWithValue }) => {
    return cartService
      .deleteItem(id)
      .then(() => id)
      .catch(() =>
        rejectWithValue(
          "Ha ocurrido un error al eliminar el producto del carrito"
        )
      );
  }
);

export const mergeCart = createAsyncThunk("cart/merge", () => {
  return cartService.mergeCart();
});

export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ id, type, quantity }, { rejectWithValue }) => {
    if (type === "increment") {
      quantity += 1;
    } else if (type === "decrement") {
      if (quantity > 1) quantity -= 1;
    }

    return cartService
      .updateQuantity(id, type, quantity)
      .then(() => ({ id, quantity }))
      .catch(() =>
        rejectWithValue(
          "Ha ocurrido un error al modificar la cantidad del producto"
        )
      );
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart(state, action) {
      return action.payload;
    },
    cleanCart() {
      return [];
    },
  },
  extraReducers: {
    [addProduct.fulfilled]: (state, action) => {
      return [...state, action.payload];
    },
    [updateQuantity.fulfilled]: (state, action) => {
      const item = state.find((prod) => prod.id === action.payload.id);
      item.quantity = action.payload.quantity;
    },
    [removeProduct.fulfilled]: (state, action) => {
      return state.filter((prod) => prod.id !== action.payload);
    },
  },
});

export const { setCart, cleanCart } = cartSlice.actions;
export default cartSlice.reducer;
