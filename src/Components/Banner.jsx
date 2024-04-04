import { useEffect } from "react";

const Banner = ({ gameBanner }) => {
  // useEffect(() => {
  //     console.log(gameBanner)
  // })
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent-500 w-full">
        <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
        <button className="bg-blue-700 py-1 px-2 text-white rounded-md">
          Get Now
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        alt={gameBanner.name}
        className="md:h-[320px] w-full object-cover rounded-xl"
      />
    </div>
  );
};

export default Banner;
