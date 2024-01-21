<!--   create a json data for get product first -->

import create from "zustand";
import { devtools } from "zustand/middleware";

export const useProductsStore = create(
  devtools((set) => ({
    productData: [
      {
        name: "Chocolate  cake",
        price: "100",
        img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  }))
);


# we can ge the data from above code

const GetProducts = () => {
const data = useProductsStore((state: any) => state.productData);
console.log(data);




<!--  -->