import { Footer } from "@/components/home/Footer";
import { Background } from "@/components/home/background/Background";
import { Noise } from "@/components/effect/Noise";
import { StarField } from "@/components/home/background/StarField";
import { Chrome } from "../effect/Chrome";

export default function Home() {
  return (
    <div className="relative flex flex-col m-auto w-full h-screen overflow-hidden">
      <StarField />
      <Background />
      <Noise />

      <div className="absolute inset-0 m-auto flex flex-col justify-center">
        <div className="h-auto w-fit">
          <div className="hidden md:block">
            <Chrome text="Yanisa Poongthaisong" />
          </div>
          <div className="block md:hidden">
            <Chrome text="Yanisa" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
