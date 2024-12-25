import { useNavigate } from "react-router-dom";



const Hero: React.FC = () => {
    const nav=useNavigate();
    return <section className="bg-gradient-to-r from-purple-400 to-blue-300 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4 animate-slidein">Welcome to</h1>
        <span className="text-8xl font-extrabold mb-4 font-mono animate-slidein">Medium</span>
        <p className="text-xl mb-8 animate-slidein font-semibold">Share your ideas with the world!</p>
        <button className="bg-white text-blue-950 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 animate-slidein" onClick={()=>{
          nav("/signup")
        }}>
          Get Started
        </button>
      </div>
    </section>
}
  export default Hero;
  