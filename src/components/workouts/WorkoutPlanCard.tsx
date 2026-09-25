import { IWorkout } from "@/types/workoutType";
import Image from "next/image";
import React from "react";
import { Check, Eye, X } from "lucide-react";
import { FaBurn, FaRegClock, FaRegStar } from "react-icons/fa";

const WorkoutPlanCard = ({ plan }: { plan: IWorkout }) => {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-md p-4 ">
      <div className="flex flex-col md:flex-row items-center gap-5">
        {/* Left - Image */}
        <div className="w-2/4 md:w-1/4 md:h-36 h-30 shrink-0">
          <Image
            src={plan.image}
            alt={plan.name}
            width={160}
            height={128}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Middle - Content */}
        <div className="flex-1 w-full space-y-2.5">
          <h2 className="text-2xl font-bold">{plan.name.toUpperCase()}</h2>

          <p className="">{plan.equipment}</p>

          <div className="flex gap-5">
            <p className="flex gap-2 items-center">
              <FaRegClock className="text-[#CCFF00]" />
              {plan.duration}
            </p>
            <p className="flex gap-2 items-center">
              <FaBurn className="text-[#CCFF00]"/>
              {plan.caloriesBurned}
            </p>
            <p className="flex gap-2 items-center">
              <FaRegStar className="text-[#CCFF00]"/>
              {plan.rating}
            </p>
          </div>
        </div>

        {/* Right - Actions */}
        <div className="md:flex  gap-2 w-full md:w-auto">
          <button className="btn btn-outline rounded-full gap-2">
            <Eye size={16} className=""/>
            View Details
          </button>

          <button className="btn  rounded-full font-bold text-black bg-[#CCFF00] gap-2">
            <Check size={16} className="font-bold" />
            Mark as Done
          </button>

          <button className="gap-2 font-bold" aria-label="Remove workout">
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanCard;
