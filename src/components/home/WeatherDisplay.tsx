
import { useEffect, useState } from "react";
import { Cloud, CloudRain, CloudSnow, Sun, Thermometer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface WeatherData {
  temperature: number;
  condition: "sunny" | "cloudy" | "rainy" | "snowy";
  location: string;
}

export function WeatherDisplay() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call for weather data
    setTimeout(() => {
      // Mock data for demonstration
      setWeather({
        temperature: 28,
        condition: "sunny",
        location: "Andheri, Mumbai",
      });
      setLoading(false);
    }, 1500);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-8 w-8 text-accent" />;
      case "cloudy":
        return <Cloud className="h-8 w-8 text-gray-400" />;
      case "rainy":
        return <CloudRain className="h-8 w-8 text-sky-light" />;
      case "snowy":
        return <CloudSnow className="h-8 w-8 text-blue-200" />;
      default:
        return <Thermometer className="h-8 w-8" />;
    }
  };

  if (loading) {
    return (
      <Card className="mb-6 overflow-hidden">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-16" />
            </div>
            <Skeleton className="h-12 w-12 rounded-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!weather) return null;

  return (
    <Card className="mb-6 overflow-hidden glass-effect">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Current Location</h3>
            <p className="text-lg font-semibold">{weather.location}</p>
            <div className="flex items-center mt-1">
              <p className="text-2xl font-bold mr-1">{weather.temperature}°C</p>
              <span className="text-sm capitalize text-muted-foreground">{weather.condition}</span>
            </div>
          </div>
          {getWeatherIcon(weather.condition)}
        </div>
      </CardContent>
    </Card>
  );
}
