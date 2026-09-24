import { IWorkout } from "@/types/workoutType";
import { createContext, ReactNode, useState } from "react";

interface IProviderProps {
  todaysPlan: IWorkout[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saveLater: IWorkout[];
  setSaveLater: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<IProviderProps>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  saveLater: [],
  setSaveLater: () => {},
});

const WorkoutProvider = ({ children }: {children: ReactNode}) => {
  const [todaysPlan, setTodaysPlan] = useState<IWorkout[]>([]);
  const [saveLater, setSaveLater] = useState<IWorkout[]>([]);

  const sharedState = {
    todaysPlan,
    setTodaysPlan,
    saveLater,
    setSaveLater,
  };
  return (
    <WorkoutContext.Provider value={sharedState}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
