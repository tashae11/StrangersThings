import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect,useState } from "react"

import {
    Error,
    Footer,
    Login,
    Navbar,
    Posts,
    Profile,
    SinglePost
} from "./components"


function App (){
    const[token,setToken]= useState("")

    useEffect(()=>{
        const savedToken = window.localStorage.getItem("token")
        console.log(savedToken)
        if(savedToken){
            setToken(savedToken)
        } 
    },[])

        function logout(){
            localStorage.removeItem("token")
            setToken("")
        }
        return (
    <>
    {
        token? <div>logged in</div> : <div>not logged in</div>
    }
        
    <Navbar/>

    <Routes>
        <Route path="/" element={<Posts/>}></Route>
        <Route path="Posts" element={<Posts/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        <Route path="Login" element={<Login setToken={setToken}/>}></Route>
        <Route path="Profile" element={<Profile/>}></Route>
        <Route path="Profile/:name" element={<Profile/>}></Route>
        <Route path="SinglePost" element={<SinglePost/>}></Route>
    </Routes>

    <Footer/>
     
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<BrowserRouter><App/></BrowserRouter>)
