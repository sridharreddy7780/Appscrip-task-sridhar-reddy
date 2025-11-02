import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductGrid from "./ProductGrid";
import FiltersSidebar from "./FiltersSidebar";
import SortDropdown from "./SortDropdown";
import "./ProductCard.css";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    setSortedProducts(data);
  };

  const handleSort = (type) => {
    let temp = [...products];

    switch (type) {
      case "Newest First":
        temp.sort((a, b) => b.id - a.id);
        break;
      case "Popular":
        temp.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "Price High to Low":
        temp.sort((a, b) => b.price - a.price);
        break;
      case "Price Low to High":
        temp.sort((a, b) => a.price - b.price);
        break;
      default:
        temp = [...products];
    }

    setSortedProducts(temp);
  };

  return (
    <div className="product-page">
      {/* Top bar: items count, toggle, sort */}
      <div className="top-bar">
        <div className="top-left">
          <span className="items-count">
            {products.length} ITEMS
          </span>
        </div>

        <div className="top-center">
          <button
            className={`toggle-btn ${showFilters ? "active" : ""}`}
            onClick={() => setShowFilters(!showFilters)}
            aria-expanded={showFilters}
            aria-controls="filters-sidebar"
          >
            {showFilters ? (
              <>
                <FaChevronLeft className="toggle-arrow" />
                <span>HIDE FILTER</span>
              </>
            ) : (
              <>
                <span>SHOW FILTER</span>
                <FaChevronRight className="toggle-arrow" />
              </>
            )}
          </button>
        </div>

        <div className="top-right">
          <SortDropdown onSortChange={handleSort} />
        </div>
      </div>

      {/* Content: sidebar (conditionally rendered) + product grid */}
      <div className="content-container">
        {showFilters && (
          <div className="sidebar-visible" id="filters-sidebar" role="region">
            <FiltersSidebar visible={showFilters} />
          </div>
        )}

        <div className={showFilters ? "grid-70" : "grid-100"}>
          <ProductGrid products={sortedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
