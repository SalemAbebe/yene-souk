import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  // wishListItems: localStorage.getItem("wishListItems")
  //   ? JSON.parse(localStorage.getItem("wishListItems"))
  //   : [],
  wishListItems: [],
  wishListTotalQuantity: 0,
  //   wishListTotalAmount: 0,
  previousURL: "",
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    ADD_TO_WISHLIST(state, action) {
      console.log(action.payload);
      console.log(state.wishListItems);
      const newWishList = state.wishListItems;
      console.log(newWishList);
      const productIndex = state.wishListItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productIndex >= 0) {
        // Item already exists in the wishList
        // notify the product is already in my wish list

        toast.info(`${action.payload.name} is already in your wish list`, {
          position: "top-left",
        });
      } else {
        // Item doesn't exists in the wishlist
        // Add item to the wishlist
        const tempProduct = { ...action.payload, wishListQuantity: 1 };
        state.wishListItems.push(tempProduct);
        toast.success(`${action.payload.name} added to wishlist`, {
          position: "top-left",
        });
        console.log(state.wishListItems);
      }
      // save wishlist to LS
      localStorage.setItem(
        "wishListItems",
        JSON.stringify(state.wishListItems)
      );
    },

    REMOVE_FROM_WISHLIST(state, action) {
      const newWishListItem = state.wishListItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.wishListItems = newWishListItem;
      toast.success(`${action.payload.name} removed from your wishlist.`, {
        position: "top-left",
      });

      localStorage.setItem(
        "wishListItems",
        JSON.stringify(state.wishLIstItems)
      );
    },
    CLEAR_WISHLIST(state, action) {
      state.wishListItems = [];
      toast.info(`Wishlist cleared`, {
        position: "top-left",
      });

      localStorage.setItem(
        "wishListItems",
        JSON.stringify(state.wishListItems)
      );
    },
    CLEAR_WISHLIST_ITEM(state, action) {
      state.wishListItems = [];
      toast.info(`Wishlist cleared`, {
        position: "top-left",
      });
    },

    CALCULATE_TOTAL_WISHLIST_QUANTITY(state, action) {
      const array = [];
      state.wishListItems.map((item) => {
        const { wishListQuantity } = item;
        const quantity = wishListQuantity;
        return array.push(quantity);
      });
      const totalQuantity = array.reduce((a, b) => {
        return a + b;
      }, 0);
      console.log(totalQuantity);
      state.wishListTotalQuantity = totalQuantity;
    },
    SAVE_URL(state, action) {
      console.log(action.payload);
      state.previousURL = action.payload;
    },
    GET_WISHLIST_DATA(state, action) {
      if (localStorage.getItem("wishListItems")) {
        state.wishListItems = JSON.parse(localStorage.getItem("wishListItems"));
        console.log(
          state.wishListItems,
          JSON.parse(localStorage.getItem("wishListItems"))
        );

        const array = [];
        state.wishListItems.map((item) => {
          const { wishListQuantity } = item;
          const quantity = wishListQuantity;
          return array.push(quantity);
        });
        const totalQuantity = array.reduce((a, b) => {
          return a + b;
        }, 0);
        console.log(totalQuantity);
        state.wishListTotalQuantity = totalQuantity;
      }
    },
  },
});

export const {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  CLEAR_WISHLIST,
  GET_WISHLIST_DATA,
  CLEAR_WISHLIST_ITEM,
  CALCULATE_TOTAL_WISHLIST_QUANTITY,
  SAVE_URL,
} = wishListSlice.actions;

export const selectWishListItems = (state) => state.wishList.wishListItems;
export const selectWishListTotalQuantity = (state) =>
  state.wishList.wishListTotalQuantity;
export const selectPreviousURL = (state) => state.wishList.previousURL;

export default wishListSlice.reducer;
