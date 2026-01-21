import {configureStore} from "@reduxjs/toolkit" ; 
import MainReducer from "../reducers/MainReducer";
import HtmlReducer from "../reducers/HtmlReducer" ;
import CssReducer from "../reducers/CssReducer" ;
import JavaScriptReducer from "../reducers/JavaScriptReducer" ;
import ReactReducer from "../reducers/ReactReducer" ;
import PhpReducer from "../reducers/PhpReducer" ;
import LaravelReducer from "../reducers/LaravelReducer" ;
import NodeJSReducer from "../reducers/NodeJSReducer" ;
import SQLReducer from "../reducers/SQLReducer" ;
import MySQLReducer from "../reducers/MySQLReducer" ;
import GitReducer from "../reducers/GitReducer" ;

export const store = configureStore({
    reducer : {
        ActiveItem : MainReducer  ,
        HtmlState : HtmlReducer ,
        CssState : CssReducer ,
        JavaScriptState : JavaScriptReducer ,
        ReactState : ReactReducer ,
        PhpState : PhpReducer ,
        LaravelState : LaravelReducer ,
        NodeJSState : NodeJSReducer ,
        SQLState : SQLReducer ,
        MySQLState : MySQLReducer ,
        GitState : GitReducer
    }
})
