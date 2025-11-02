import { CiHeart } from "react-icons/ci";
import "./ProductGrid.css";

function ProductGrid({ products }) {
  return (
    <div className="products-container">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.title} className="product-image" />

          <h3 className="product-title">{item.title}</h3>

          <div className="rating">
            ⭐ {item.rating.rate} / 5
          </div>

          <div className="price-lock">
             
            <span>Sign in or create an account to see price</span>
            <CiHeart className="like-icon" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;

