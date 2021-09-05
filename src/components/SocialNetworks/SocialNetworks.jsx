import { Link } from "react-router-dom";
import Title from "../Title/Title";
import "./SocialNetworks.css"
const SocialNetworks =() =>{
    return(
        <>
            <a className="socialNetworks" href="https://www.instagram.com/flordeliszok" rel="noopener noreferrer"
            target="_blank" ><Title text="@Flordeliszok"/></a>
        </>
    )
}
export default SocialNetworks;