
import { ItineraryGenerator } from "@/components/itinerary/ItineraryGenerator";

const Itinerary = () => {
  return (
    <div className="pb-20">
      <header className="p-4 border-b">
        <h1 className="text-xl font-bold">Plan Your Itinerary</h1>
        <p className="text-sm text-muted-foreground">
          Create personalized travel plans with AI
        </p>
      </header>

      <main className="p-4">
        <ItineraryGenerator />
      </main>
    </div>
  );
};

export default Itinerary;
