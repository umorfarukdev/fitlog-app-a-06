import WortoutCard from "@/components/workouts/WortoutCard";
import { IWorkout } from "@/types/workoutType";
import { Bounce, toast } from "react-toastify";
const workoutsPromise = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    if (!res.ok) {
      toast.error("Failed to fetch workouts!", {
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
      throw new Error("Failed to fetch workouts");
    }
    const data: IWorkout[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fatching workouts", error);
    return [];
  }
};

const WorksoutPage = async () => {
  const workouts: IWorkout[] = await workoutsPromise();
  return (
    <section className="container mx-auto py-16">
      <div className="mb-8">
        <h1 className="font-oswald font-bold text-3xl">THE LIBRARY</h1>
        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <WortoutCard key={workout.id} workout={workout}></WortoutCard>
        ))}
      </div>
    </section>
  );
};

export default WorksoutPage;
