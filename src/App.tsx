const App = () => {
  return (
    <div className="h-screen flex flex-col justify-between font-mono">
      <button className="h-1/2 text-9xl bg-[#0000FF] text-white">EUROPE</button>
      <marquee
        className="w-full h-full absolute top-0 left-0 z-20 mix-blend-difference"
        behavior="alternate"
        direction="down"
        truespeed="true"
        scrolldelay="30"
      >
        <marquee
          className=" text-white text-5xl -top-6"
          behavior="alternate"
          truespeed="true"
          scrolldelay="30"
        >
          <div className="relative text-[#FF00FF]">What is your decision?</div>
        </marquee>
      </marquee>
      <div className="relative h-20 ">
        <div class="ocean z-10" style="filter: contrast(25);">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
        <div class="ocean2 z-10">
          <div class="wave2"></div>
          <div class="wave2"></div>
          <div class="wave2"></div>
        </div>
      </div>
      <button
        className="h-1/2 text-9xl bg-[#FF0000]"
        style="filter: contrast(25);"
      >
        <div className="relative">
          <span className="absolute word">OLIGARCHY</span>
          <span className="absolute word">USSR</span>
        </div>
      </button>
    </div>
  );
};

export default App;
