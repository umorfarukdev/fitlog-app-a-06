"use client";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import { IWorkout } from "@/types/workoutType";
import { Bookmark } from "lucide-react";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const AddSaveLaterBtn = ({ workout }: { workout: IWorkout }) => {
  const { saveLater, setSaveLater } = useContext(WorkoutContext);

  const handleAddSaveLater = () => {
    const exists = saveLater.some((item) => item.id === workout.id);

    if (exists) return;

    const updatePlan = [...saveLater, workout]
    setSaveLater(updatePlan);
    toast.success("Successfully Saved Workout!", {
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
    <div>
      <button
        className="btn btn-outline flex-1 gap-2"
        onClick={handleAddSaveLater}
      >
        <Bookmark size={20} />
        Save for later
      </button>
    </div>
  );
};

export default AddSaveLaterBtn;
