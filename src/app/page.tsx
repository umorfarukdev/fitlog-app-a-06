import Banner from "@/components/homepage/Banner";
import WorksoutPage from "./workouts/page";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner></Banner>
      <WorksoutPage></WorksoutPage>
    </div>
  );
}
