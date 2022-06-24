import React from 'react'
import {useSelector} from  'react-redux'
function View() {
    const user=useSelector((state)=>state.user.value)
  return (
    <div><label>name:{user.username}</label><br/>
    <label>place:{user.place}</label><br/>
    <label>email:{user.email}</label></div>
  )
}

export default View