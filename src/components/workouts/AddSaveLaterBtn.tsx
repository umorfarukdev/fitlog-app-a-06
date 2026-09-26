"use client"
import { WorkoutContext } from "@/contexts/WorkoutContext";
import { IWorkout } from "@/types/workoutType";
import { Bookmark } from "lucide-react";
import React, { useContext } from "react";

const AddSaveLaterBtn = ({ workout }: { workout: IWorkout }) => {
  const { saveLater, setSaveLater } = useContext(WorkoutContext);

  const handleAddSaveLater = () => {
    setSaveLater([...saveLater, workout]);
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
