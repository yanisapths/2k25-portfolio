import { Footer } from "@/components/home/Footer";
import { BgElement } from "@/components/home/background/Background";
import Chrome from "../effect/Chrome";
import { ScrollFadeIn } from "../ScrollFadeIn";

export default function Home() {
  return (
    <ScrollFadeIn>
      <BgElement
        imgSrc="/images/home/element1.webp"
        className="absolute -top-[15%] -left-[15%] lg:-top-[10%] lg:-left-[10%]"
      />
      <BgElement
        imgSrc="/images/home/element2.webp"
        className="absolute -bottom-[15%] -right-[40%] lg:-bottom-[15%] lg:-right-[25%]"
      />

      <div className="absolute inset-0 m-auto flex flex-col justify-center">
        <div className="h-auto w-fit">
          <div className="hidden md:flex md:flex-col">
            <Chrome text="Yanisa" />
            <Chrome text="Poongthaisong" />
          </div>
          <div className="block md:hidden">
            <Chrome text="Yanisa" />
          </div>
        </div>
      </div>
      <Footer />
    </ScrollFadeIn>
  );
}
