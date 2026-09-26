"use client";

import { IWorkout } from "@/types/workoutType";
import Image from "next/image";
import Link from "next/link";
import { FaBurn, FaRegClock, FaRegStar } from "react-icons/fa";
import { toast } from "react-toastify";

interface IWorkoutProps {
  workout: IWorkout;
}

const WortoutCard = ({ workout }: IWorkoutProps) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;
  return (
    <div className="card border-[#ffffff20] shadow bg-[#222630] border rounded-2xl">
      <figure className="max-h-60">
        <Image
          width={500}
          height={200}
          src={image}
          alt={name}
          className="bg-cover"
        />
      </figure>
      <div className="p-5">
        <div className="flex gap-4 space-y-3 mt-4">
          {muscleGroups.map((muscle, i) => (
            <p
              key={i}
              className="badge badge-primary badge-xl rounded-full bg-[#C2F800] text-black"
            >
              {muscle}
            </p>
          ))}
        </div>
        <div className="">
          <h2 className="text-xl">{name.toUpperCase()}</h2>
          <p className="text-[#9CA3AF]">{equipment}</p>
        </div>
        <div className="divider"></div>
        <div className="flex gap-5 mb-3">
          <p className="flex gap-2 items-center">
            <FaRegClock />
            {duration}
          </p>
          <p className="flex gap-2 items-center">
            <FaBurn />
            {caloriesBurned}
          </p>
          <p className="flex gap-2 items-center">
            <FaRegStar />
            {rating}
          </p>
        </div>
        <div className="text-right">
          <Link
            className="btn rounded-full bg-[#C2F800] text-black font-bold"
            href={`/workouts/${id}`}
            onClick={() =>
              toast.info("Opening workout details...", {
                position: "bottom-right",
                autoClose: 2000,
              })
            }
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WortoutCard;
