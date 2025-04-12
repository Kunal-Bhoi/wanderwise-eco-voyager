
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon, Home, Map, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Vendor {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  tags: string[];
  contact?: string;
  price?: string;
  languages?: string[];
  location?: string;
}

const MOCK_VENDORS: Vendor[] = [
  {
    id: "v1",
    name: "Rama's Handicrafts",
    description: "Traditional handmade items and souvenirs",
    category: "artisan",
    rating: 4.5,
    tags: ["handicrafts", "souvenirs", "eco-friendly"],
    contact: "rama@example.com"
  },
  {
    id: "v2",
    name: "Meera's Food Stall",
    description: "Authentic local street food and snacks",
    category: "vendor",
    rating: 4.7,
    tags: ["food", "local", "vegan options"],
    contact: "+91 9876543210"
  },
  {
    id: "h1",
    name: "Sunset Homestay",
    description: "Cozy homestay with sea views and home-cooked meals",
    category: "homestay",
    rating: 4.8,
    tags: ["sea view", "family", "quiet"],
    price: "₹1800/night",
    contact: "sunsethomelodge@example.com"
  },
  {
    id: "h2",
    name: "Garden Retreat",
    description: "Peaceful homestay surrounded by greenery",
    category: "homestay",
    rating: 4.6,
    tags: ["garden", "eco-friendly", "breakfast included"],
    price: "₹1500/night",
    contact: "+91 9876543211"
  },
  {
    id: "g1",
    name: "Rajiv Kumar",
    description: "Expert local guide with 10+ years of experience",
    category: "guide",
    rating: 4.9,
    tags: ["history", "culture", "personalized"],
    languages: ["English", "Hindi", "Marathi"],
    contact: "+91 9876543212"
  },
  {
    id: "s1",
    name: "Eco Crafts Store",
    description: "Handmade eco-friendly products and gifts",
    category: "shop",
    rating: 4.4,
    tags: ["sustainable", "crafts", "gifts"],
    location: "Lokhandwala Market, Shop #12",
    contact: "+91 9876543213"
  }
];

export function VendorList({ searchQuery }: { searchQuery: string }) {
  // Filter vendors based on search query
  const filteredVendors = searchQuery
    ? MOCK_VENDORS.filter(
        (vendor) =>
          vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vendor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vendor.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : MOCK_VENDORS;

  const vendors = filteredVendors.filter(v => v.category === "vendor" || v.category === "artisan");
  const homestays = filteredVendors.filter(v => v.category === "homestay");
  const guides = filteredVendors.filter(v => v.category === "guide");
  const shops = filteredVendors.filter(v => v.category === "shop");

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid grid-cols-5 mb-4">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="vendors">Vendors</TabsTrigger>
        <TabsTrigger value="homestays">Homestays</TabsTrigger>
        <TabsTrigger value="guides">Guides</TabsTrigger>
        <TabsTrigger value="shops">Shops</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all" className="space-y-4">
        {filteredVendors.length === 0 ? (
          <p className="text-center py-8 text-muted-foreground">No results found</p>
        ) : (
          filteredVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))
        )}
      </TabsContent>
      
      <TabsContent value="vendors" className="space-y-4">
        {vendors.length === 0 ? (
          <p className="text-center py-8 text-muted-foreground">No vendors found</p>
        ) : (
          vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))
        )}
      </TabsContent>
      
      <TabsContent value="homestays" className="space-y-4">
        {homestays.length === 0 ? (
          <p className="text-center py-8 text-muted-foreground">No homestays found</p>
        ) : (
          homestays.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))
        )}
      </TabsContent>
      
      <TabsContent value="guides" className="space-y-4">
        {guides.length === 0 ? (
          <p className="text-center py-8 text-muted-foreground">No guides found</p>
        ) : (
          guides.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))
        )}
      </TabsContent>
      
      <TabsContent value="shops" className="space-y-4">
        {shops.length === 0 ? (
          <p className="text-center py-8 text-muted-foreground">No shops found</p>
        ) : (
          shops.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))
        )}
      </TabsContent>
    </Tabs>
  );
}

function VendorCard({ vendor }: { vendor: Vendor }) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "vendor":
      case "artisan":
        return <ShoppingBag className="h-5 w-5" />;
      case "homestay":
        return <Home className="h-5 w-5" />;
      case "guide":
        return <User className="h-5 w-5" />;
      case "shop":
        return <Map className="h-5 w-5" />;
      default:
        return <ShoppingBag className="h-5 w-5" />;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <div className={cn(
              "mr-3 p-2 rounded-full",
              vendor.category === "vendor" || vendor.category === "artisan" ? "bg-primary/10" :
              vendor.category === "homestay" ? "bg-earth/10" :
              vendor.category === "guide" ? "bg-sky/10" : "bg-stone/10"
            )}>
              {getCategoryIcon(vendor.category)}
            </div>
            <div>
              <CardTitle className="text-base">{vendor.name}</CardTitle>
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  <StarIcon className="h-3 w-3 fill-accent text-accent mr-1" />
                  <span className="text-xs font-medium">{vendor.rating}</span>
                </div>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="text-xs capitalize text-muted-foreground">
                  {vendor.category}
                </span>
              </div>
            </div>
          </div>
          {vendor.price && (
            <Badge variant="outline" className="text-xs">
              {vendor.price}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{vendor.description}</p>
        
        {vendor.languages && (
          <div className="mb-2">
            <span className="text-xs font-medium">Languages: </span>
            <span className="text-xs text-muted-foreground">{vendor.languages.join(", ")}</span>
          </div>
        )}
        
        {vendor.location && (
          <div className="mb-2">
            <span className="text-xs font-medium">Location: </span>
            <span className="text-xs text-muted-foreground">{vendor.location}</span>
          </div>
        )}
        
        <div className="flex flex-wrap gap-1 mt-2">
          {vendor.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        {vendor.contact && (
          <div className="mt-3 pt-2 border-t text-xs text-muted-foreground">
            Contact: {vendor.contact}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
