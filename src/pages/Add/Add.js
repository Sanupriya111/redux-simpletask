import React from 'react'
import{useDispatch} from 'react-redux'
import { display } from '../../reducers/User'
import {previous} from '../../reducers/User'
function Add() {
    const dispatch=useDispatch()
  return (
    <div>
<button onClick={()=>{dispatch(display({username:'Shilpa',place:'koyilandy',email:'shilpa@fdgsud'}))}}>change me</button>
 <button onClick={()=>{dispatch(previous())}}>Convert me</button>     
    </div>
  )
}

export default Add