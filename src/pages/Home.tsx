
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { WeatherDisplay } from "@/components/home/WeatherDisplay";
import { NearbyPlaces } from "@/components/home/NearbyPlaces";
import { Leaf } from "lucide-react";

const Home = () => {
  return (
    <div className="pb-20">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Leaf className="h-6 w-6 text-primary mr-2" />
          <h1 className="text-xl font-bold">WanderWise</h1>
        </div>
        <ThemeToggle />
      </header>

      <main className="px-4">
        <section className="mb-6">
          <WeatherDisplay />
        </section>

        <section>
          <NearbyPlaces />
        </section>
      </main>
    </div>
  );
};

export default Home;
