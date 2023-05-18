import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function ProductCard({ product }) {
  return (
    <div key={product.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1  overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-fit">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={100}
          height={100}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/product-detail/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{`R$${product.price}`}</p>
      </div>
    </div>
  );
}
