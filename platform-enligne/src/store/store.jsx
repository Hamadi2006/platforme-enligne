import {configureStore} from "@reduxjs/toolkit" ; 
import MainReducer from "../reducers/MainReducer";
import HtmlReducer from "../reducers/HtmlReducer" ;

export const store = configureStore({
    reducer : {
        ActiveItem : MainReducer  ,
        HtmlState : HtmlReducer
    }
})