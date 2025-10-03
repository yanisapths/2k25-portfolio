import { Footer } from "@/components/home/Footer";
import { Background } from "@/components/home/Background";

export default function Home() {
  return (
    <div className="relative flex flex-col m-auto w-full h-screen overflow-hidden">
      <Background />

      <div className="relative h-full">
        <Footer />
      </div>
    </div>
  );
}
