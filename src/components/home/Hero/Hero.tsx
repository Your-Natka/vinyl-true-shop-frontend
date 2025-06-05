"use client";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 py-20 text-center bg-black text-white px-4 md:px-8 lg:px-20"
    >
      {/* Центрована назва */}
      <div className="mb-10">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Vinyl <span className="block">True</span>
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          Твоя колекція вінілу починається тут
        </p>
        <div className="mt-6">
          <CustomButton text="Каталог" onClick={() => console.log("Clicked!")} />
        </div>
      </div>

      {/* Галерея */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="min-w-[100px] h-[120px] bg-gray-700 rounded-lg flex-shrink-0"
          >
            {/* Тут можна замінити заглушку на <Image src="/img.jpg" ... /> */}
          </div>
        ))}
      </div>
    </section>
  );
}

