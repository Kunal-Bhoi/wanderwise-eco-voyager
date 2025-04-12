
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

export function VendorSearch({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-6">
      <Input
        type="text"
        placeholder="Search by city or area name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pr-10"
      />
      <Button 
        type="submit" 
        size="icon" 
        variant="ghost" 
        className="absolute right-0 top-0 h-full"
      >
        <Search className="h-4 w-4" />
      </Button>
    </form>
  );
}
