
import { useState } from "react";
import { VendorSearch } from "@/components/find/VendorSearch";
import { VendorList } from "@/components/find/VendorList";

const Find = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="pb-20">
      <header className="p-4 border-b">
        <h1 className="text-xl font-bold">Find Local Services</h1>
        <p className="text-sm text-muted-foreground">
          Discover local vendors, homestays, guides and shops
        </p>
      </header>

      <main className="p-4">
        <VendorSearch onSearch={handleSearch} />
        <VendorList searchQuery={searchQuery} />
      </main>
    </div>
  );
};

export default Find;
