"use client";

import { WorkoutContext } from "@/contexts/WorkoutContext";
import { IWorkout } from "@/types/workoutType";
import { CalendarPlus } from "lucide-react";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const AddToTodayBtn = ({ workout }: { workout: IWorkout }) => {
  const { todaysPlan, setTodaysPlan } = useContext(WorkoutContext);

  const handleAddTodaysPlan = () => {
    const exists = todaysPlan.some((item) => item.id === workout.id);

    if (exists) return;

    const updatedPlan = [...todaysPlan, workout];
    setTodaysPlan(updatedPlan);
    toast.success("Successfully Add Today Workout!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    

  };

  return (
    <button
      className="btn flex-1 gap-2 bg-[#CCFF00] font-bold text-black"
      onClick={handleAddTodaysPlan}
    >
      <CalendarPlus size={20} />
      Add to today{`'`}s plan
    </button>
  );
};

export default AddToTodayBtn;
