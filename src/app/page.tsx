import Terminal from "@/components/Terminal";
import Navbar from "@/components/Navbar";
import PowerMenu from "@/components/PowerMenu";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-900 relative">
      <Terminal />
      <Navbar />
      <PowerMenu />
    </div>
  );
}
