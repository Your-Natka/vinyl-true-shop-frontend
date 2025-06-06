export async function getPopularProducts() {
  const res = await fetch("/api/products?filter=popular");
  return res.json();
}