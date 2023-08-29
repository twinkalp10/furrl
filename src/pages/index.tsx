import { Inter } from "next/font/google";
import Vibes from "@/components/vibe/Vibe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Vibes />
    </div>
  );
}
