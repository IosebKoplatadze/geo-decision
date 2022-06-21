import Footer from './components/Footer';

const App = () => (
  <div className="h-screen flex flex-col justify-between font-mono overflow-hidden">
    <button className="h-1/2 bg-gradient-to-t from-[#91bdf5] to-indigo-900 text-white relative cursor-n-resize text-5xl  sm:text-8xl md:text-9xl">
      <span className="absolute -translate-x-1/2">EUROPE</span>
      <img
        src="./tbilisi.svg"
        className="absolute top-0 rotate-180 scale-110"
      />
    </button>

    <div className="relative sm:h-52 h-32">
      <div class="ocean2 z-10">
        <div class="wave2"></div>
        <div class="wave2"></div>
        <div class="wave2"></div>
      </div>
      <div class="ocean z-10" style="filter: contrast(25);">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>

    <button
      className="h-1/2 relative bg-gradient-to-b from-[#531212] to-red-900 cursor-s-resize text-4xl  sm:text-7xl md:text-8xl"
      style="filter: contrast(3); font-family: 'BARBEDWIRE', sans-serif;"
    >
      <div className="relative text-[#FF0000] ">
        <span className="absolute word -translate-x-1/2 bottom-0">
          OLIGARCHY
        </span>
        <span className="absolute word -translate-x-1/2 bottom-0">USSR</span>
      </div>
      <img src="./war.svg" className="absolute bottom-0" />
    </button>
    <marquee
      className="w-full h-full absolute top-0 left-0 z-20 mix-blend-difference pointer-events-none"
      behavior="alternate"
      direction="down"
      truespeed="true"
      scrolldelay="30"
    >
      <marquee
        className=" text-white text-lg  sm:text-2xl md:text-4xl lg:text-5xl -top-6"
        behavior="alternate"
        truespeed="true"
        scrolldelay="30"
      >
        <div className="relative text-[#FF00FF]">What is your decision?</div>
      </marquee>
    </marquee>
    <Footer />
  </div>
);

export default App;
