import { IWorkout } from "@/types/workoutType";
import Image from "next/image";
import Link from "next/link";
import { FaBurn, FaRegClock, FaRegStar } from "react-icons/fa";

interface IWorkoutProps {
  workout: IWorkout;
}

const WortoutCard = ({ workout }: IWorkoutProps) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;
  return (
    <Link href={`/workouts/${id}`}>
      <div className="card border-gray-100 border rounded-2xl">
        <figure className="max-h-60">
          <Image
            width={500}
            height={200}
            src={image}
            alt={name}
            className="bg-cover"
          />
        </figure>
        <div className="p-5">
          <div className="flex gap-4 space-y-3 mt-4">
            {muscleGroups.map((muscle, i) => (
              <p
                key={i}
                className="badge badge-primary badge-xl rounded-full bg-[#C2F800] text-black"
              >
                {muscle}
              </p>
            ))}
          </div>
          <div className="">
            <h2 className="text-xl">{name.toUpperCase()}</h2>
            <p className="text-[#9CA3AF]">{equipment}</p>
          </div>
          <div className="divider"></div>
          <div className="flex gap-5">
            <p className="flex gap-2 items-center">
              <FaRegClock />
              {duration}
            </p>
            <p className="flex gap-2 items-center">
              <FaBurn />
              {caloriesBurned}
            </p>
            <p className="flex gap-2 items-center">
              <FaRegStar />
              {rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WortoutCard;
