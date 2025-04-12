
import { ChatInterface } from "@/components/chat/ChatInterface";

const Chat = () => {
  return (
    <div className="h-screen pb-16">
      <header className="p-4 border-b">
        <h1 className="text-xl font-bold">Travel Assistant</h1>
        <p className="text-sm text-muted-foreground">
          Ask me anything about your travel plans
        </p>
      </header>

      <main className="h-[calc(100%-4rem)]">
        <ChatInterface />
      </main>
    </div>
  );
};

export default Chat;
