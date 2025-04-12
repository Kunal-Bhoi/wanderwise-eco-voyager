
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Calendar, Clock, MapPin, Save } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ItineraryDay {
  day: number;
  activities: {
    time: string;
    activity: string;
    location: string;
    isEcoFriendly: boolean;
  }[];
}

export function ItineraryGenerator() {
  const [prompt, setPrompt] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("3");
  const [interests, setInterests] = useState<string[]>([]);
  const [isEcoFriendly, setIsEcoFriendly] = useState(true);
  const [language, setLanguage] = useState("english");
  const [isAccessible, setIsAccessible] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState<ItineraryDay[] | null>(null);

  const interestOptions = [
    { label: "Culture", value: "culture" },
    { label: "Food", value: "food" },
    { label: "Nature", value: "nature" },
    { label: "Shopping", value: "shopping" },
    { label: "Adventure", value: "adventure" },
  ];

  const toggleInterest = (value: string) => {
    if (interests.includes(value)) {
      setInterests(interests.filter((i) => i !== value));
    } else {
      setInterests([...interests, value]);
    }
  };

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateItinerary();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateItinerary();
  };

  const generateItinerary = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock itinerary data for demonstration
      const mockItinerary: ItineraryDay[] = [
        {
          day: 1,
          activities: [
            {
              time: "09:00 AM",
              activity: "Visit the Amber Fort",
              location: "Amber Fort, Jaipur",
              isEcoFriendly: true
            },
            {
              time: "12:30 PM",
              activity: "Lunch at Spice Court",
              location: "Spice Court, Civil Lines",
              isEcoFriendly: true
            },
            {
              time: "02:30 PM",
              activity: "Explore City Palace",
              location: "City Palace, Pink City",
              isEcoFriendly: true
            },
            {
              time: "05:00 PM",
              activity: "Shop at local artisan market",
              location: "Johari Bazaar",
              isEcoFriendly: true
            },
            {
              time: "07:30 PM",
              activity: "Dinner at traditional Rajasthani restaurant",
              location: "Chokhi Dhani",
              isEcoFriendly: false
            }
          ]
        },
        {
          day: 2,
          activities: [
            {
              time: "08:30 AM",
              activity: "Morning yoga session",
              location: "Jal Mahal garden",
              isEcoFriendly: true
            },
            {
              time: "10:30 AM",
              activity: "Visit Jantar Mantar",
              location: "Jantar Mantar, Pink City",
              isEcoFriendly: true
            },
            {
              time: "01:00 PM",
              activity: "Lunch at organic cafe",
              location: "Anokhi Cafe",
              isEcoFriendly: true
            },
            {
              time: "03:00 PM",
              activity: "Textile workshop with local artisans",
              location: "Sanganer village",
              isEcoFriendly: true
            },
            {
              time: "07:00 PM",
              activity: "Cultural show and dinner",
              location: "Nahargarh Fort",
              isEcoFriendly: false
            }
          ]
        },
        {
          day: 3,
          activities: [
            {
              time: "09:00 AM",
              activity: "Visit Galtaji Temple (Monkey Temple)",
              location: "Galtaji, outskirts of Jaipur",
              isEcoFriendly: true
            },
            {
              time: "12:00 PM",
              activity: "Lunch at local family home",
              location: "Homestay experience in village",
              isEcoFriendly: true
            },
            {
              time: "02:30 PM",
              activity: "Pottery workshop",
              location: "Sanganer crafts village",
              isEcoFriendly: true
            },
            {
              time: "05:30 PM",
              activity: "Sunset at Nahargarh Fort",
              location: "Nahargarh Fort",
              isEcoFriendly: true
            },
            {
              time: "08:00 PM",
              activity: "Farewell dinner at rooftop restaurant",
              location: "Peacock Rooftop Restaurant",
              isEcoFriendly: false
            }
          ]
        }
      ];
      
      setItinerary(mockItinerary);
      setIsLoading(false);
    }, 2000);
  };

  const saveItinerary = () => {
    // Mock saving functionality
    console.log("Saving itinerary...");
    // Here you would typically save to localStorage or a backend
  };

  return (
    <div>
      {itinerary ? (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Your Itinerary</h2>
            <Button onClick={saveItinerary} size="sm" className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save Plan
            </Button>
          </div>
          
          <div className="space-y-6">
            {itinerary.map((day) => (
              <Card key={day.day}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Day {day.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {day.activities.map((activity, index) => (
                      <li key={index} className="relative pl-6 border-l-2 border-muted pb-4 last:pb-0">
                        <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                        <div className="flex items-start mb-1">
                          <Clock className="h-4 w-4 text-muted-foreground mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium">{activity.time}</span>
                          {activity.isEcoFriendly && (
                            <Badge variant="outline" className="ml-2 text-xs bg-forest/10 text-forest border-forest/20">
                              Eco-friendly
                            </Badge>
                          )}
                        </div>
                        <p className="font-medium mb-1">{activity.activity}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {activity.location}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Button onClick={() => setItinerary(null)} variant="outline" className="w-full mt-6">
            Create New Itinerary
          </Button>
        </div>
      ) : (
        <Tabs defaultValue="prompt" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="prompt">AI Prompt</TabsTrigger>
            <TabsTrigger value="form">Detailed Form</TabsTrigger>
          </TabsList>
          
          <TabsContent value="prompt">
            <Card>
              <CardHeader>
                <CardTitle>Create with AI Prompt</CardTitle>
              </CardHeader>
              <form onSubmit={handlePromptSubmit}>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="prompt">Describe your ideal trip</Label>
                      <Textarea
                        id="prompt"
                        placeholder="E.g., Plan a 3-day eco-friendly cultural trip in Jaipur"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Generating..." : "Generate Itinerary"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="form">
            <Card>
              <CardHeader>
                <CardTitle>Create with Detailed Form</CardTitle>
              </CardHeader>
              <form onSubmit={handleFormSubmit}>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget (₹)</Label>
                      <Input
                        id="budget"
                        type="number"
                        placeholder="Enter your budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (Days)</Label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Day</SelectItem>
                          <SelectItem value="2">2 Days</SelectItem>
                          <SelectItem value="3">3 Days</SelectItem>
                          <SelectItem value="5">5 Days</SelectItem>
                          <SelectItem value="7">7 Days</SelectItem>
                          <SelectItem value="10">10 Days</SelectItem>
                          <SelectItem value="14">14 Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Interests</Label>
                      <div className="flex flex-wrap gap-2">
                        {interestOptions.map((interest) => (
                          <Badge
                            key={interest.value}
                            variant={interests.includes(interest.value) ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => toggleInterest(interest.value)}
                          >
                            {interest.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="eco-friendly">Eco-friendly Options</Label>
                      <Switch
                        id="eco-friendly"
                        checked={isEcoFriendly}
                        onCheckedChange={setIsEcoFriendly}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="language">Preferred Language</Label>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="hindi">Hindi</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="german">German</SelectItem>
                          <SelectItem value="chinese">Chinese</SelectItem>
                          <SelectItem value="japanese">Japanese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="accessibility">Accessibility Requirements</Label>
                      <Switch
                        id="accessibility"
                        checked={isAccessible}
                        onCheckedChange={setIsAccessible}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Generating..." : "Generate Itinerary"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
