
import { MapView } from "@/components/travel/MapView";

const TravelMode = () => {
  return (
    <div className="pb-20">
      <header className="p-4 border-b">
        <h1 className="text-xl font-bold">Travel Mode</h1>
        <p className="text-sm text-muted-foreground">
          Explore nearby services and follow your itinerary
        </p>
      </header>

      <main className="p-4">
        <MapView />
      </main>
    </div>
  );
};

export default TravelMode;
