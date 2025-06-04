"use client";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 py-20 text-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Vinyl True</h1>
      <p className="text-lg mb-8">Твоя колекція вінілу починається тут</p>
      <CustomButton text="Каталог" onClick={() => console.log("Clicked!")} />
    </section>
  );
}
