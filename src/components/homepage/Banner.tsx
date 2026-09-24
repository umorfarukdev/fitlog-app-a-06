import Image from "next/image";
import hero from "./../../../public/banner.png";

const Banner = () => {
  return (
    <div className="hero bg-[#222630] container mx-auto p-10 rounded-2xl my-16 font-i">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          alt="Tailwind CSS hero component"
          width={400}
          height={600}
          src={hero}
          className="max-w-sm rounded-lg"
        />
        <div>
          <h2 className="text-[#C2F800] font-bold">WORKOUT LIBRARY</h2>
          <h1 className="font-oswald text-6xl font-bold">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="py-6 text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today`s plan, and watch the week`s work add up.
          </p>
          <button className="btn btn-primary font-bold bg-[#C2F800] border-none text-black">
            BROWSE WORKOUTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
