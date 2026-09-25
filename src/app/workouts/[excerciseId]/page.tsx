import Image from "next/image";
import {
  Bookmark,
  Star,
} from "lucide-react";

import { IWorkout } from "@/types/workoutType";
import AddToTodayBtn from "@/components/workouts/AddToTodayBtn";

interface IWorkoutDetailsProps {
  params: Promise<{ excerciseId: string }>;
}

const workoutsPromise = async (): Promise<IWorkout[]> => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    if (!res.ok) {
      throw new Error("Failed to fetch workouts");
    }
    const data: IWorkout[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fatching workouts", error);
    return [];
  }
};

const WorkoutDetails = async ({ params }: IWorkoutDetailsProps) => {
  const { excerciseId } = await params;
  const workouts: IWorkout[] = await workoutsPromise();

  const workout = workouts.find((workout) => workout.id === Number(excerciseId));
  if (!workout) {
    throw new Error("Workout not fount")
  }
  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = workout;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="relative min-h-100 overflow-hidden rounded-2xl bg-base-200 lg:min-h-175">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center">
          {/* Title */}
          <h1 className="text-3xl font-bold uppercase md:text-4xl">{name}</h1>

          {/* Description */}
          <p className="mt-4 text-base leading-7 text-base-content/70">
            {description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-5 flex flex-wrap gap-2">
            {muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge badge-primary badge-outline px-4 py-3"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-8 overflow-hidden rounded-xl border border-base-300">
            <div className="grid grid-cols-2">
              <div className="border-b border-r border-base-300 p-4">
                <p className="text-xs font-semibold uppercase text-base-content/50">
                  Equipment
                </p>
                <p className="mt-1 font-medium">{equipment}</p>
              </div>

              <div className="border-b border-base-300 p-4">
                <p className="text-xs font-semibold uppercase text-base-content/50">
                  Difficulty
                </p>
                <p className="mt-1 font-medium">{difficulty}</p>
              </div>

              <div className="border-b border-r border-base-300 p-4">
                <p className="text-xs font-semibold uppercase text-base-content/50">
                  Sets
                </p>
                <p className="mt-1 font-medium">{sets}</p>
              </div>

              <div className="border-b border-base-300 p-4">
                <p className="text-xs font-semibold uppercase text-base-content/50">
                  Reps
                </p>
                <p className="mt-1 font-medium">{reps}</p>
              </div>

              <div className="border-r border-base-300 p-4">
                <p className="text-xs font-semibold uppercase text-base-content/50">
                  Duration
                </p>
                <p className="mt-1 font-medium">{duration} min</p>
              </div>

              <div className="p-4">
                <p className="text-xs font-semibold uppercase text-base-content/50">
                  Calories
                </p>
                <p className="mt-1 font-medium">{caloriesBurned} kcal</p>
              </div>

              <div className="col-span-2 border-t border-base-300 p-4">
                <div className="flex items-center gap-2">
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />

                  <span className="font-semibold">{rating}</span>

                  <span className="text-sm text-base-content/50">Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-xl font-bold uppercase">Instructions</h2>

            <ol className="mt-4 space-y-4">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-content">
                    {index + 1}
                  </span>

                  <p className="pt-1 leading-6 text-base-content/70">
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AddToTodayBtn workout={workout}></AddToTodayBtn>

            <button className="btn btn-outline flex-1 gap-2">
              <Bookmark size={20} />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
