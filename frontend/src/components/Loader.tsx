
const Loader = ({color="white",size=9}:{color:string,size:number}) => {
  return (
    <div className="flex justify-center items-center ">
      <div className={`w-${size} h-${size} border-4 border-dashed rounded-full animate-spin border-${color}`}></div>
    </div>
  );
};

export default Loader;