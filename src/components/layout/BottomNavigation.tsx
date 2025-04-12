
import { Home, Search, Calendar, MessageSquare, Map } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function BottomNavigation() {
  const location = useLocation();
  
  const navItems = [
    {
      icon: Home,
      label: "Home",
      path: "/",
    },
    {
      icon: Search,
      label: "Find",
      path: "/find",
    },
    {
      icon: Calendar,
      label: "Itinerary",
      path: "/itinerary",
    },
    {
      icon: MessageSquare,
      label: "Chat",
      path: "/chat",
    },
    {
      icon: Map,
      label: "Travel",
      path: "/travel",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-background border-t border-border h-16">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center flex-1 py-1 transition-colors",
              isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className={cn("w-5 h-5 mb-1", isActive ? "text-primary" : "text-inherit")} />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
