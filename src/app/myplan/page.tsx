"use client";

import WorkoutPlanCard from "@/components/workouts/WorkoutPlanCard";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import { IWorkout } from "@/types/workoutType";
import Link from "next/link";
import { useContext, useState } from "react";
import { Bounce, toast } from "react-toastify";

const ListedPlanCard = () => {
  const { todaysPlan, saveLater, setTodaysPlan, setSaveLater } =
    useContext(WorkoutContext);

  console.log("TODAY PLAN:", todaysPlan);
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  console.log(sortBy);

  const sortWorkouts = (workouts: IWorkout[]) => {
    const sortedWorkout = [...workouts];
    if (sortBy === "duration") {
      sortedWorkout.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedWorkout.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedWorkout.sort((a, b) => b.rating - a.rating);
    }
    return sortedWorkout;
  };

  const sortedWorkoutsPlan = sortWorkouts(todaysPlan);
  const sortedWorkoutsPlanSave = sortWorkouts(saveLater);

  console.log(sortedWorkoutsPlan);

  const handleRemovePlan = (id: number) => {
    const updatePlan = todaysPlan.filter((plan) => plan.id !== id);
    setTodaysPlan(updatePlan);
  };

  const handleRemovePlanSaveLater = (id: number) => {
    const updatePlanSaveLater = saveLater.filter((plan) => plan.id !== id);
    setSaveLater(updatePlanSaveLater);
    toast.success("Saved Plan Successfully Removed!", {
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
    <div className="container mx-auto">
      <div className="mb-8 mt-12">
        <h1 className="font-oswald font-bold text-3xl">MY PLAN</h1>
        <p className="text-[#9CA3AF]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border py-6 px-8 rounded-2xl">
        <div className="border-r mr-4">
          <p>Exercises</p>
          <h1 className="text-[#CCFF00] font-bold font-oswald text-4xl">
            {todaysPlan.length}
          </h1>
        </div>
        <div className="border-r mr-4">
          <p>Minutes</p>
          <h1 className="font-bold font-oswald text-4xl">
            {todaysPlan.reduce((total, plan) => total + plan.duration, 0)}
          </h1>
        </div>
        <div>
          <p>Calories</p>
          <h1 className="font-bold font-oswald text-4xl">
            {todaysPlan.reduce((total, plan) => total + plan.caloriesBurned, 0)}
          </h1>
        </div>
      </div>

      <div>
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "duration" | "calories" | "rating")
          }
          className="select select-accent"
        >
          <option disabled={true}>Sort By</option>
          <option value={"duration"}>Duration</option>
          <option value={"calories"}>Calories</option>
          <option value={"rating"}>Rating</option>
        </select>
      </div>

      {/* name of each tab group should be unique */}
      <div>
        {todaysPlan.length === 0 && saveLater.length === 0 ? (
          <div className="text-center py-10 border my-16 rounded-2xl">
            <h1 className="font-bold font-oswald text-center">
              NOTHING HERE YET
            </h1>
            <p className="text-[#A1A1AA] text-sm mb-5">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/workouts"
              className="btn btn-primary font-bold bg-[#C2F800] border-none text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="tabs tabs-box my-10">
            <input
              type="radio"
              name="my_tabs_6"
              className="tab checked:bg-[#CCFF00] checked:text-black checked:rounded-xl font-semibold"
              aria-label="Today's Plan"
              defaultChecked
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              {sortedWorkoutsPlan.map((plan) => (
                <WorkoutPlanCard
                  key={plan.id}
                  plan={plan}
                  type={"today"}
                  handleRemovePlan={handleRemovePlan}
                  handleRemovePlanSaveLater={handleRemovePlanSaveLater}
                ></WorkoutPlanCard>
              ))}
            </div>

            <input
              type="radio"
              name="my_tabs_6"
              className="tab checked:bg-[#CCFF00] checked:text-black checked:rounded-xl font-semibold"
              aria-label="Saved"
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              {sortedWorkoutsPlanSave.map((plan) => (
                <WorkoutPlanCard
                  key={plan.id}
                  plan={plan}
                  type="saved"
                  handleRemovePlan={handleRemovePlan}
                  handleRemovePlanSaveLater={handleRemovePlanSaveLater}
                ></WorkoutPlanCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedPlanCard;
