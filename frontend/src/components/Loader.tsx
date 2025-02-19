
const Loader = ({color="white"}:{color:string}) => {
  return (
    <div className="flex justify-center items-center ">
      <div className={`w-10 h-10 border-4 border-dashed rounded-full animate-spin border-${color}`}></div>
    </div>
  );
};

export default Loader;