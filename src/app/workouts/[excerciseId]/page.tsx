import Image from "next/image";
import { IWorkout } from "@/types/workoutType";
import AddToTodayBtn from "@/components/workouts/AddToTodayBtn";
import AddSaveLaterBtn from "@/components/workouts/AddSaveLaterBtn";
import { Bounce, toast } from "react-toastify";

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
    toast.error("Failed to load workouts", {
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
    return [];
  }
};

const WorkoutDetails = async ({ params }: IWorkoutDetailsProps) => {
  const { excerciseId } = await params;
  const workouts: IWorkout[] = await workoutsPromise();

  const workout = workouts.find(
    (workout) => workout.id === Number(excerciseId),
  );
  if (!workout) {
    throw new Error("Workout not fount");
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
    <div className="container mx-auto px-4 py-10 mt-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="relative min-h-100 overflow-hidden rounded-2xl bg-base-200 lg:min-h-175">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center">
          {/* Title */}
          <h1 className="text-3xl font-bold font-oswald uppercase md:text-4xl">
            {name}
          </h1>

          {/* Description */}
          <p className="mt-4 text-base leading-7 text-base-content/70">
            {description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-5 flex flex-wrap gap-2">
            {muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge badge-primary badge-xl font-semibold rounded-full bg-[#C2F800] text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-8 overflow-hidden rounded-xl border border-base-300">
            <div className="w-full rounded-xl bg-[#232834] p-2 text-[#9fa6b2] font-sans text-xs">
              {/* Equipment Row */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#9CA3AF20]">
                <span className="uppercase tracking-wider font-medium">
                  Equipment
                </span>
                <span className="text-sm font-normal text-white">
                  {equipment}
                </span>
              </div>

              {/* Difficulty Row */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#9CA3AF20]">
                <span className="uppercase tracking-wider font-medium">
                  Difficulty
                </span>
                <span className="text-sm font-normal text-white">
                  {difficulty}
                </span>
              </div>

              {/* Sets Row */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#9CA3AF20]">
                <span className="uppercase tracking-wider font-medium">
                  Sets
                </span>
                <span className="text-sm font-normal text-white">{sets}</span>
              </div>

              {/* Reps Row */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#9CA3AF20]">
                <span className="uppercase tracking-wider font-medium">
                  Reps
                </span>
                <span className="text-sm font-normal text-white">{reps}</span>
              </div>

              {/* Duration Row */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#9CA3AF20]">
                <span className="uppercase tracking-wider font-medium">
                  Duration
                </span>
                <span className="text-sm font-normal text-white">
                  {duration} min
                </span>
              </div>

              {/* Calories Row */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#9CA3AF20]">
                <span className="uppercase tracking-wider font-medium">
                  Calories
                </span>
                <span className="text-sm font-normal text-white">
                  {caloriesBurned} kcal
                </span>
              </div>

              {/* Rating Row */}
              <div className="flex items-center justify-between px-4 py-4">
                <span className="uppercase tracking-wider font-medium">
                  Rating
                </span>
                <span className="text-sm font-normal text-white">{rating}</span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-xl font-bold uppercase">Instructions</h2>

            <ul className="mt-4 space-y-4">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="text-[#9CA3AF]">{index + 1}.</span>

                  <p className="pt-1 leading-6 text-base-content/70">
                    {instruction}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AddToTodayBtn workout={workout}></AddToTodayBtn>

            <AddSaveLaterBtn workout={workout}></AddSaveLaterBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
