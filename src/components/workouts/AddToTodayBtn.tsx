"use client"

import { WorkoutContext } from "@/contexts/WorkoutContext";
import { IWorkout } from "@/types/workoutType";
import { CalendarPlus } from "lucide-react";
import React, { useContext } from "react";

const AddToTodayBtn = ({ workout }: { workout: IWorkout }) => {
  const { todaysPlan, setTodaysPlan } = useContext(WorkoutContext);

  const handleAddTodaysPlan = () => {
    setTodaysPlan([...todaysPlan, workout]);
    console.log("TODAY PLAN:", todaysPlan);
  };
  return (
    <button
      className="btn btn-primary flex-1 gap-2"
      onClick={handleAddTodaysPlan}
    >
      <CalendarPlus size={20} />
      Add to today{`'`}s plan
    </button>
  );
};

export default AddToTodayBtn;
