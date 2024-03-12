import "../styles/PreLoader.css";

const PreLoader = () => {
  return (
    <div
      className="w-full bg-black flex justify-center items-center ease-in-out flex-col gap-y-7"
      style={{ height: "100vh" }}
    >
      <div className="loader"></div>
      <h1 className="loader-text">Your To-Do is Getting Loaded ....</h1>
    </div>
  );
};

export default PreLoader;
