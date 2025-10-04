import { Footer } from "@/components/home/Footer";
import { Background } from "@/components/home/background/Background";
import { Noise } from "@/components/effect/Noise";
import { StarField } from "@/components/home/background/StarField";
import { Chrome } from "../effect/Chrome";
import { useBreakpoints } from "@/app-hooks/use-breakpoints";

export default function Home() {
  const { md } = useBreakpoints();

  return (
    <div className="relative flex flex-col m-auto w-full h-screen overflow-hidden">
      <StarField />
      <Background />
      <Noise />

      <div className="fixed inset-0 flex items-center justify-center">
        <div className="h-auto w-fit">
          <div className="hidden md:block">
            <Chrome text="Yanisa Poongthaisong" />
          </div>
          <div className="block md:hidden">
            <Chrome text="Yanisa" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
