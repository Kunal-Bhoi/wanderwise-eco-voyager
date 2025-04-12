
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { BottomNavigation } from "@/components/layout/BottomNavigation";

import Home from "./pages/Home";
import Find from "./pages/Find";
import Itinerary from "./pages/Itinerary";
import Chat from "./pages/Chat";
import TravelMode from "./pages/TravelMode";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen max-w-lg mx-auto relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/find" element={<Find />} />
              <Route path="/itinerary" element={<Itinerary />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/travel" element={<TravelMode />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BottomNavigation />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
