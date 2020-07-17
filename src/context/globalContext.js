import React, { createContext } from "react";
import { images } from "./imagesPath";

const initialState = {
  shoes: [
    {
      id: 1,
      shoeName: "Nike Original 1",
      slug: "Nike-Original-1",
      price: 100,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe1,
      count: 1,
    },
    {
      id: 2,
      shoeName: "Nike Original 2",
      slug: "Nike-Original-2",
      price: 200,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe2,
      count: 1,
    },
    {
      id: 3,
      shoeName: "Nike Original 3",
      slug: "Nike-Original-3",
      price: 220,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe3,
      count: 1,
    },
    {
      id: 4,
      shoeName: "Nike Original 4",
      slug: "Nike-Original-4",
      price: 200,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe4,
      count: 1,
    },
    {
      id: 5,
      shoeName: "Nike Original 5",
      slug: "Nike-Original-5",
      price: 150,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe5,
      count: 1,
    },
    {
      id: 6,
      shoeName: "Nike Original 6",
      slug: "Nike-Original-6",
      price: 100,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe6,
      count: 1,
    },
    {
      id: 7,
      shoeName: "Nike Original 7",
      slug: "Nike-Original-7",
      price: 250,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe7,
      count: 1,
    },
    {
      id: 8,
      shoeName: "Nike Original 8",
      slug: "Nike-Original-8",
      price: 300,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe8,
      count: 1,
    },
    {
      id: 9,
      shoeName: "Nike Original 9",
      slug: "Nike-Original-9",
      price: 200,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      image: images.Shoe9,
      count: 1,
    },
  ],
};
export const ShoeDataContext = createContext(initialState);
export const GlobalContextProvider = (props) => {
  return (
    <ShoeDataContext.Provider
      value={{
        shoes: initialState.shoes,
      }}
    >
      {props.children}
    </ShoeDataContext.Provider>
  );
};
