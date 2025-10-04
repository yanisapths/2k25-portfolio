import { Footer } from "@/components/home/Footer";
import { Background } from "@/components/home/background/Background";
import { Noise } from "@/components/effect/Noise";
import { StarField } from "@/components/home/background/StarField";
import { Chrome } from "../effect/chrome/Chrome";
import { useBreakpoints } from "@/app-hooks/use-breakpoints";

export default function Home() {
  const { md } = useBreakpoints();

  return (
    <div className="relative flex flex-col m-auto w-full h-screen overflow-hidden">
      <StarField />
      <Background />
      <Noise />

      <div className="fixed inset-0 flex items-center justify-center">
        {md ? <Chrome text="Yanisa Poongthaisong" /> : <Chrome text="Yanisa" />}
        <Footer />
      </div>
    </div>
  );
}
