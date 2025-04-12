
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Place {
  id: string;
  name: string;
  description: string;
  image: string;
  distance: string;
}

const MOCK_PLACES: Place[] = [
  {
    id: "1",
    name: "Versova Beach",
    description: "Clean shoreline with local fishermen",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D",
    distance: "2.3 km"
  },
  {
    id: "2",
    name: "Lokhandwala Market",
    description: "Popular shopping area with local vendors",
    image: "https://images.unsplash.com/photo-1555921015-5ab09467b53f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D",
    distance: "1.5 km"
  },
  {
    id: "3",
    name: "Gilbert Hill",
    description: "Ancient monolithic column of black basalt rock",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlsbHxlbnwwfHwwfHx8MA%3D%3D",
    distance: "3.2 km"
  },
  {
    id: "4",
    name: "Joggers Park",
    description: "Peaceful green space with walking trails",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFya3xlbnwwfHwwfHx8MA%3D%3D",
    distance: "1.8 km"
  }
];

export function NearbyPlaces() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Discover Places Near Me</h2>
        <Link to="/find">
          <Button variant="ghost" size="sm" className="text-primary flex items-center">
            More
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </Link>
      </div>
      
      <div className="overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex space-x-4 w-max">
          {MOCK_PLACES.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PlaceCard({ place }: { place: Place }) {
  return (
    <Card className="min-w-[240px] max-w-[240px] overflow-hidden">
      <div 
        className="h-32 bg-cover bg-center" 
        style={{ backgroundImage: `url(${place.image})` }}
      />
      <CardContent className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-base">{place.name}</h3>
            <p className="text-xs text-muted-foreground line-clamp-2">{place.description}</p>
          </div>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
            {place.distance}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
