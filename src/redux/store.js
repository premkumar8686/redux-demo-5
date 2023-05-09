import { configureStore } from "@reduxjs/toolkit";
import { myReducer } from "./reducer";



// export const myStore = createStore(

//     myReducer,

// );

export const myStore = configureStore({
    
    reducer:{
        myCounter: myReducer,
    }
});