import {configureStore} from "@reduxjs/toolkit" ; 
import MainReducer from "../reducers/MainReducer";


export const store = configureStore({
    reducer : {
        ActiveItem : MainReducer 
    }
})