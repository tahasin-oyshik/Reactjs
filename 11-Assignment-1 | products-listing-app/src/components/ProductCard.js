const ProductCard = ({ product }) => {
  const { title, price, description, image, rating } = product;
  return (
    <article className="product-card">
      <img className="product-card__img" src={image} alt={title} />
      <div className="product-card__details">
        <h4 className="product-card__title">{title}</h4>
        <p className="product-card__price">Price: {price}</p>
        <p className="product-card__rating">Rating: {rating.rate} {rating.count}</p>
        <p className="product-card__desc">Description: {description}</p>
        <button className="product-card__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default ProductCard;
