

const Loading = ({imgSrc,message}) => {
    return (
        <>
        
        {/* <img src= {imgSrc}/> */}
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <div className="text-4xl">{message}</div>
        
      </div>
      </>
    );
  };
  
  export default Loading;