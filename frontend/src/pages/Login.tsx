import { Qoute } from "../components/Qoute";
import { Sign } from "../components/Sign";

export default function Login (){
    return <div className="w-[100vw] h-[100vh] flex ">
        <Qoute quote="I think frugality drives innovation, just like other constraints do. One of the only ways to get out of a tight box is to invent your way out."
        writer="Jeff Bezos" company="Founder of Amazon"></Qoute>
        <Sign type={1} ></Sign> 
        
    </div>
}