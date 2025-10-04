import { cn } from "@/lib/utils";
import Image from "next/image";
import { GlowDp1 } from "../../effect/Glow";
export const Background = () => {
  return (
    <div>
      <GlowDp1 className="absolute mx-auto -top-2/3 translate-y-2/3 inset-x-0 transform w-[40%] h-[50%] rounded-full" />
      <GlowDp1 className="absolute mx-auto bottom-0 translate-y-2/3 inset-x-0 transform w-[40%] h-[60%] rounded-full" />
      <Element
        imgSrc="/images/home/element1.webp"
        className="absolute -top-[15%] -left-[15%] lg:-top-[10%] lg:-left-[10%]"
      />
      <Element
        imgSrc="/images/home/element2.webp"
        className="absolute lg:bottom-[5%] lg:-right-[25%]"
      />
    </div>
  );
};

const Element = ({
  imgSrc,
  className,
}: {
  imgSrc: string;
  className?: string;
}) => {
  return (
    <div className={cn(className)}>
      <div className="relative w-[500px] h-[600px] lg:w-[800px] lg:h-[600px]">
        <Image src={imgSrc} alt={imgSrc} fill className="object-contain" />
      </div>
    </div>
  );
};
