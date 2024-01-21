/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useProductsStore = create(
  devtools(
    immer((set) => ({
      productData: [],
      getApi: async () => {
        const apiResponse = await axios.get("http://localhost:4000/products");
        set((state) => {
          state.cakesData = apiResponse.data;
        });
      },
      getProductAPI: async () => {
        const apiResponse = await axios.get("http://localhost:4000/products");
        set((state) => {
          state.productData = apiResponse.data;
        });
      },
      //   add cake api

      addProductAPI: async (payload) => {
        const apiResponse = await axios.post(
          "http://localhost:4000/products",
          payload
        );
        set((state) => {
          state.productData.push(apiResponse.data);
        });
      },
      updatProductAPI: async (payload) => {
        const apiResponse = await axios.put(
          `http://localhost:4000/products/${payload.id}`,
          payload
        );
        set((state) => {
          let productState = state.productData.filter(
            (_) => _.id !== payload.id
          );

          productState.productData.push(apiResponse.data);
          state.productData = productState;
        });
      },

      //   delete

      deleteProduct: async (id) => {
        const apiResponse = await axios.delete(
          `http://localhost:4000/products/${id}`
        );
        set((state) => {
          state.productData = state.productData.filter(
            (data) => data.id !== id
          );
        });
      },
    }))
  )
);

// we can not directly modifying the state we can regenerate a new state and return this so we use immer it will creating a new state and return this

export const getProductById = (id) => {
  return (state) => {
    let product = state.productData.filter((c) => c.id === Number(id));
    if (product) {
      return product[0];
    }
    return null;
  };
};
