import {Link} from "react-router-dom"
export default function Navbar(){
    /*return <div>broken!</div>*/
    
    return(
        <>
        
        <Link to="Posts">Posts</Link>
        <Link to= "Login">Login</Link>
        <Link to="Profile/Tasha">Profile</Link>
        </>
    )
}