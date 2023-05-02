import { createStore } from "@reduxjs/toolkit";
import { myReducer } from "./reducer";



export const myStore = createStore(

    myReducer,

);