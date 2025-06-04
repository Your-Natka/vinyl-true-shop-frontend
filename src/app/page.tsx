import Hero from "@/components/home/Hero/Hero";
import Reviews from "@/components/home/Reviews/Reviews";
import About from "@/components/home/About/About";
import Products from "@/components/home/Products/Products"; // якщо є
import Container from "@/components/ui/Container/Container";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <Products /> {/* Популярне, розпродаж */}
        <Reviews />
        <About />
      </Container>
    </>
  );
}
