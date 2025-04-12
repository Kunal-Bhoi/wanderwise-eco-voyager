
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/contexts/ThemeContext";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm your WanderWise assistant. How can I help with your travel plans today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const mockResponses = [
        "I'd recommend visiting the local markets in the morning when they're less crowded and the temperature is cooler. Don't forget to try some street food!",
        "For eco-friendly transportation, consider using the local metro system or renting bicycles. Many areas in the city center are easily accessible this way.",
        "The best time to visit would be during the shoulder season (March-April or September-October) when there are fewer tourists but the weather is still pleasant.",
        "Make sure to carry a reusable water bottle and shopping bag to reduce plastic waste during your travels.",
        "Try connecting with local guides through our Find tab - they often know hidden gems that aren't in typical guidebooks!",
      ];
      
      const aiResponse: Message = {
        id: Date.now().toString(),
        content: mockResponses[Math.floor(Math.random() * mockResponses.length)],
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex items-start gap-3 max-w-[80%]",
              message.sender === "user" ? "ml-auto" : "mr-auto"
            )}
          >
            {message.sender === "ai" && (
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="AI" />
                <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
              </Avatar>
            )}
            
            <div
              className={cn(
                "rounded-lg px-4 py-2 text-sm",
                message.sender === "user"
                  ? "bg-primary text-primary-foreground"
                  : theme === "light"
                  ? "bg-muted"
                  : "bg-secondary"
              )}
            >
              {message.content}
            </div>
            
            {message.sender === "user" && (
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-muted">U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex items-start gap-3 max-w-[80%]">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" alt="AI" />
              <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
            </Avatar>
            <div className={cn(
              "rounded-lg px-4 py-2 text-sm",
              theme === "light" ? "bg-muted" : "bg-secondary"
            )}>
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-2 w-2 rounded-full bg-current animate-bounce"></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about your travel plans..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
