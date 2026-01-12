import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    activeItem : 'Index'
}


const MainReducer = createSlice({
    name : 'MainReducer' , 
    initialState , 
    reducers : {
        setActiveItem : (state,action) =>{
            state.activeItem = action.payload ; 
        }
    }
})

export default MainReducer.reducer ; 
export const {setActiveItem} = MainReducer.actions ;