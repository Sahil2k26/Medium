import { Qoute } from "../components/Qoute";
import { Sign } from "../components/Sign";

export default function Signup (){
    return <div className="w-[100vw] h-[100vh] flex ">
        <Sign type={0}></Sign>
        <Qoute quote="The customer service I recived was exceptional.
                The support team went above and beyond to address my concerns."
                writer="Jules Winnfield" 
                company="CEO , Acme Inc"></Qoute>
    </div>
}