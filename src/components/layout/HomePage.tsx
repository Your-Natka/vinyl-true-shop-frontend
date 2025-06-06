import Popular from "../sections/Popular/Popular";
import Lottery from "../sections/Lottery/Lottery";
import GiftCards from "../sections/GiftCards/GiftCards";
import Reviews from "../sections/Reviews/Reviews";
import About from "../sections/About/About";
import Hero from "../sections/Hero/Hero";

export default function HomePage() {
  return (
    <>
      <Hero/>
      <Popular />
      <Lottery />
      <GiftCards />
      <Reviews />
      <About />
    </>
  );
}