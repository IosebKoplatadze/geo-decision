const App = () => {
  return (
    <div className="h-screen flex flex-col font-mono">
      <button className="h-1/2 text-9xl bg-blue-600 text-white">EU</button>
      <div className="flex justify-center relative">
        <h1 className="absolute text-white text-5xl -top-6 w-full">
          <marquee className="relative text-blue-600" behavior="alternate">
            <span className="absolute h-1/2 overflow-hidden text-red-900">
              What is your decision?
            </span>
            What is your decision?
          </marquee>
        </h1>
      </div>
      <button className="h-1/2 text-9xl bg-red-900">OLIGARCHY</button>
    </div>
  );
};

export default App;
