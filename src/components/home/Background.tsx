import { cn } from "@/lib/utils";
import Image from "next/image";
export const Background = () => {
  return (
    <div>
      <Element
        imgSrc="/images/home/element1.webp"
        className="absolute -top-[10%] -left-[10%]"
      />
      <Element
        imgSrc="/images/home/element2.webp"
        className="absolute bottom-[5%] -right-[25%]"
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
      <div className="relative w-[800px] h-[600px]">
        <Image src={imgSrc} alt={imgSrc} fill className="object-contain" />
      </div>
    </div>
  );
};
