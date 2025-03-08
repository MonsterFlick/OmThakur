"use client"
import { useState } from "react";

const Terminal = () => {
  const initialMessage = [
    { text: " /\\_/\\   Welcome to My Portfolio Terminal! ", color: "text-green-500" },
    { text: "( o.o )  Type 'help' to see available commands.", color: "text-blue-500" },
    { text: " > ^_^<  Let's build something cool together! 🚀", color: "text-yellow-500" },
    { text: "-------------------------------------", color: "text-gray-500" },
    { text: "🐸 Read the Frog IN document 🐸", color: "text-green-400" },
    { text: "-------------------------------------", color: "text-gray-500" },
    { text: "Type 'about' to learn more about me!", color: "text-pink-500" },
    { text: "Type 'projects' to check out my work.", color: "text-purple-500" },
    { text: "Type 'contact' if you want to reach out!", color: "text-cyan-500" },
    { text: "-------------------------------------", color: "text-gray-500" },
  ];
  
  
  
  const [history, setHistory] = useState<{ text: string; color: string }[]>(() => initialMessage);
      const [input, setInput] = useState("");
  const [superMode, setSuperMode] = useState(false); // Super Mode Toggle


 
  const handleCommand = async (command: string) => {
    let output = { text: "", color: "text-red-500" }; // Default color for unknown commands
    if (superMode) {
      if (command.toLowerCase() === "super") {
        setSuperMode((prev) => !prev);
        output = { text: `Super Mode ${superMode ? "Disabled" : "Enabled"}`, color: "text-yellow-500" };
      } else {
        output = { text: await processAICommand(command), color: "text-purple-500" };
      }
    } else {
      switch (command.toLowerCase()) {
        case "help":
          output = { text: "Available commands: help, about, clear", color: "text-blue-400" };
          break;
        case "about":
          output = { text: "This is a Next.js terminal interface.", color: "text-green-400" };
          break;
        case "rm":
        case "superuser":
        case "sudo":
          output = { text: "You shouldn't have done that...", color: "text-red-600" };
          setTimeout(() => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
          }, 1000);
          break;
        case "super":
          setSuperMode((prev) => !prev);
          output = { text: `Super Mode ${superMode ? "Disabled" : "Enabled"}`, color: "text-yellow-500" };
          break;
        case "clear":
          setHistory([]);
          return;
        default:
          output = { text: `Command not found: ${command}`, color: "text-red-500" };
      }
    }
  
    setHistory([...history, { text: `> ${command}`, color: "text-gray-400" }, output]);
  };
  

  const processAICommand = async (command: string) => {
    console.log("Processing AI command");
    try {
      const response = await fetch("api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command }),
      });
      const data = await response.json();
      return data.reply || "AI: No response.";
    } catch (error) {
      return "AI: Error processing command.";
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  return (
    <div className="relative">
      {/* Terminal Window */}
      <div className="fixed left-0 top-0 h-full w-[50%] bg-zinc text-green-500 p-4 overflow-y-auto font-mono">
      {history.map((line, index) => (
  <div key={index} className={line.color}>
    {line.text}
  </div>
))}

        <form onSubmit={handleSubmit} className="flex">
          <span className="mr-2">{">"}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-green-500 border-none outline-none w-full"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
  
};

export default Terminal;
