import { useParams } from "react-router-dom"



export default function Profile(){
    let {name} = useParams()
    return <div>This is {name}'s profile</div>
}