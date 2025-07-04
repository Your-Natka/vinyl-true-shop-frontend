import About from "@/components/sections/About/About";
import GiftCards from "@/components/sections/GiftCards/GiftCards";
import Hero from "@/components/sections/Hero/Hero";
import Lottery from "@/components/sections/Lottery/Lottery";
import Popular from "@/components/sections/Popular/Popular";
import Reviews from "@/components/sections/Reviews/Reviews";
import Gallery from "@/components/sections/Gallery/Gallery";
import Sale from "@/components/sections/Sale/Sale";

export default function Page() {
  return (
    <>
      <Hero />
      <Popular />
      <Sale />
      <Lottery />
      <GiftCards />
      <Reviews />
      <Gallery />
      <About />
    </>
  );
}
