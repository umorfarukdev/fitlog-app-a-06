"use client";

import WorkoutPlanCard from "@/components/workouts/WorkoutPlanCard";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import { useContext } from "react";


const ListedPlanCard = () => {
  const {todaysPlan, saveLater} = useContext(WorkoutContext)
  console.log("TODAY PLAN:", todaysPlan);

  return (
    <div className="container mx-auto">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Today's Plan"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {
            todaysPlan.map((plan) => <WorkoutPlanCard key={plan.id} plan={plan}></WorkoutPlanCard>)
          }
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {
            saveLater.map((plan) => <WorkoutPlanCard key={plan.id} plan={plan}></WorkoutPlanCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default ListedPlanCard;
