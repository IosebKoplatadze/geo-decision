import { ParentComponent } from 'solid-js';

const Bounce: ParentComponent = (props) => (
  <div className="w-full h-full absolute top-0 left-0 z-20 mix-blend-difference pointer-events-none">
    <div className="bounce-y text-white text-lg  sm:text-2xl md:text-4xl lg:text-5xl -top-6">
      <div className="relative text-[#FF00FF] bounce-x w-min text-center">
        {props.children}
      </div>
    </div>
  </div>
);

export default Bounce;
