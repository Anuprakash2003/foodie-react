import React from 'react'
import '../styles/LoginForm.css'

const LoginForm = (props) =>{
   return( <div>
   
    <input
    type={props.type}
    placeholder={props.place}
    value={props.value}
    onChange={(event) => {
        console.log(event.target.value)
        props.onSomethingHappened(event.target.value)}}/>
    </div>)
}
export default LoginForm