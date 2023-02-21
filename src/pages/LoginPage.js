import React,{useState} from "react";
import '../styles/LoginForm.css'
import LoginForm from "../components/LoginForm";
import LoginImage from "../components/LoginImage";
import CommonButton from "../components/CommonBotton";

const LoginPage = () => {
    const [userName,setUserName] =useState("");
    const [passWord,setPassWord] =useState("");

    const onCommonButtonClick=(data) =>{
   console.log("button clicked",{userName})
    }

    return (
        <div> 
            {/* <LoginImage/> */}
            <h2> Sign in</h2>
            <LoginForm
            type="text"
            name ="userName" 
            place="userName"
            value={userName}
            onSomethingHappened={(userNameValue)=>setUserName(userNameValue)}></LoginForm>
            <LoginForm
            type="password"
            name="pass"
            place="password"
            value={passWord}
            onSomethingHappened={(passValue)=>setPassWord(passValue)}>
                </LoginForm>


            <CommonButton
            type='submit'
            className='primary'
            name='login'
            onClick={(value)=>onCommonButtonClick(value)}></CommonButton>
            
        </div >


    );
};
export default LoginPage;