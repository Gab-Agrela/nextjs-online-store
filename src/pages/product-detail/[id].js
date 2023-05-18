import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  return <h1>Produto{router.query.id}</h1>;
}
