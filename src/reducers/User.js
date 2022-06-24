import {createSlice} from '@reduxjs/toolkit'
const initialStatevalue={username:'Sanupriya',place:'Olavanna',email:'sanupriya111@gmail.com'}
const userslice=createSlice({
    name:'user',
    initialState:{value:initialStatevalue},
    reducers:{display:(state,action)=>{
        state.value=action.payload},
        previous:(state,action)=>{
            state.value=initialStatevalue;
        }

           }

})
export const{display}=userslice.actions
export const{previous}=userslice.actions
export default userslice.reducer