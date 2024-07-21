import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="bg-gray-900 p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
      </header>

      <main className="flex-grow p-4">
        <Card className="max-w-md mx-auto p-6 bg-gray-800 text-white">
          <h2 className="text-xl font-semibold mb-4">Welcome</h2>
          <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
          <Button variant="outline" className="text-white border-white hover:bg-gray-700">Get Started</Button>
        </Card>
      </main>

      <footer className="bg-gray-900 p-4 text-center">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;