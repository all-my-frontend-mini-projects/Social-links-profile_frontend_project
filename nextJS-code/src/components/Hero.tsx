import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Card } from "./Card";

export function Hero() {
  return (
    <HeroHighlight>
      <Card />
      <p className="text-white font-[500] text-sm text-center">
        Author - Sarthak Sachdev
      </p>
    </HeroHighlight>
  );
}
