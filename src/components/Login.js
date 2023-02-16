import { useEffect,useState } from "react"


export default function Login({setToken}){
    //return <div>broken!</div>
    const[userName, setUsername]= useState("")
    const[password, setPassword]= useState("")

    async function loginUser(event){
        event.preventDefault()
        try{
            const response = await fetch ('https://strangers-things.herokuapp.com/api/2211-ftb-ct-web-pt/users/login',{

            
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                /*'Authorization': `Bearer ${'token'}`*/
              },

              body: JSON.stringify({
                user: {
                  username: userName,
                  password: password
                }
              })
            })

              let result = await response.json()
              console.log(result)
              setToken(result.data.token)
              localStorage.setItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…2OTl9._EoXUAr9Rpeo0QPgImiBRZDT1KYAQPex64biVGTtpzA", result.data.token)
        
            }catch(err){
            console.log(err)

        }
    }
    return(
        <form onSubmit={(event)=>loginUser(event)}>
            <label>Username:</label>
            <input type="text" value={userName} onChange={(event)=> setUsername(event.target.value)}></input>
            <label>Password:</label>
            <input type="password" value={password} onChange={(event)=> setPassword(event.target.value)}></input>
            <button type="submit">Login</button>
           

        </form>
        



        )
    }
