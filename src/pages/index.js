import ProductCard from "@/components/ProductCard";
import SearchFilter from "@/components/SearchFilter";

export async function getStaticProps() {
  const data = await fetch(
    "https://api.mercadolibre.com/sites/MLB/search?category=MLB1000"
  );
  const { results: products } = await data.json();
  return {
    props: { products },
  };
}

export default function Home({ products }) {
  return (
    <div className="">
      <div className="flex justify-end ml-96 mr-64 pl-32 pr-24">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8 text-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
