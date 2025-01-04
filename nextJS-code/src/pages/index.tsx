import { Inter } from "next/font/google";
import { Hero } from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`h-screen flex items-center justify-center ${inter.className}`}
    >
      <Hero />
    </main>
  );
}
