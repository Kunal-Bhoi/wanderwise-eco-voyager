
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Phone } from "lucide-react";

export function MapView() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    { id: "vendors", label: "Vendors" },
    { id: "guides", label: "Guides" },
    { id: "homestays", label: "Homestays" },
    { id: "shops", label: "Shops" },
  ];
  
  return (
    <div className="space-y-4">
      <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
        {/* Mock Map UI */}
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto" />
            <p className="mt-2 text-muted-foreground">
              Map would load here with Google Maps API
            </p>
          </div>
        </div>
        
        {/* Controls overlay */}
        <div className="absolute bottom-3 right-3 z-10">
          <Button size="sm" variant="secondary" className="flex gap-2 items-center">
            <Navigation className="h-4 w-4" />
            My Location
          </Button>
        </div>
        
        {/* Emergency button */}
        <div className="absolute top-3 right-3 z-10">
          <Button size="sm" variant="destructive" className="flex gap-2 items-center">
            <Phone className="h-4 w-4" />
            Emergency
          </Button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button 
          variant="outline" 
          size="sm"
          className={selectedCategory === null ? "bg-primary text-primary-foreground" : ""}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            size="sm"
            className={selectedCategory === category.id ? "bg-primary text-primary-foreground" : ""}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </Button>
        ))}
      </div>
      
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Nearby Services</h3>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Meera's Food Stall</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Authentic local street food and snacks</p>
            <div className="flex justify-between items-center">
              <Badge variant="outline" className="text-xs">300m away</Badge>
              <Button size="sm" variant="outline" className="h-8">Navigate</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Rajiv Kumar (Guide)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Expert local guide, speaks English & Hindi</p>
            <div className="flex justify-between items-center">
              <Badge variant="outline" className="text-xs">500m away</Badge>
              <Button size="sm" variant="outline" className="h-8">Contact</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Eco Crafts Store</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Handmade eco-friendly products and gifts</p>
            <div className="flex justify-between items-center">
              <Badge variant="outline" className="text-xs">800m away</Badge>
              <Button size="sm" variant="outline" className="h-8">Navigate</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
