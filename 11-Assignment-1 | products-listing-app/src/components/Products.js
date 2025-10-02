import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
