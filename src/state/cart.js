import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartService } from "../services/cart";

export const addProduct = createAsyncThunk(
  "cart/addProduct",
  async (data, { getState, rejectWithValue }) => {
    const state = getState().cart.items;
    if (state.find((prod) => prod.id === data.id)) {
      return rejectWithValue("El producto ya existe en el carrito");
    }

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

export const mergeCart = createAsyncThunk("cart/merge", () => {
  return cartService.mergeCart();
});

export const buyCart = createAsyncThunk(
  "cart/buyCart",
  async (paymentDetails, { rejectWithValue }) => {
    return cartService
      .finishOrder(paymentDetails)
      .then(() => {})
      .catch(() =>
        rejectWithValue("Ha ocurrido un error al realizar su compra")
      );
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], isLoading: false },
  reducers: {
    setCart(state, action) {
      //return action.payload;
      state.items = action.payload;
    },
    cleanCart(state) {
      //return [];
      state.items = [];
    },
  },
  extraReducers: {
    [addProduct.fulfilled]: (state, action) => {
      //return [...state, action.payload];
      state.items = [...state.items, action.payload];
    },
    [updateQuantity.fulfilled]: (state, action) => {
      const item = state.items.find((prod) => prod.id === action.payload.id);
      item.quantity = action.payload.quantity;
    },
    [removeProduct.fulfilled]: (state, action) => {
      state.items = state.items.filter((prod) => prod.id !== action.payload);
    },
    [buyCart.pending]: (state) => {
      state.isLoading = true;
    },
    [buyCart.fulfilled]: (state, action) => {
      //return [];
      state.isLoading = false;
      state.items = [];
    },
    [buyCart.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setCart, cleanCart } = cartSlice.actions;
export default cartSlice.reducer;
