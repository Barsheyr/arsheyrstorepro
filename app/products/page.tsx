import ProductsContainer from "@/components/products/ProductsContainer";
import Filter from "@/components/products/Filter";
import { Product } from "@prisma/client"; // Assuming you have Prisma setup

interface ProductsGridProps {
  products: Product[] | undefined;
}

async function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";

  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}
export default ProductsPage;
