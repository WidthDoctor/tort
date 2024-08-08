import "./products.css";

const Products = ({ products, onDel, onTap }) => {
  return (
    <div>
      <h1>Продукты</h1>
      <div className="all_Products">
        {products.map((product, index) => (
          <div key={index} className="product" onClick={() => onTap(product)}>
            <span className="name">{product.name}</span>
            <span className="howMutch">
              {product.count} {product.unit}
            </span>
            <span className="cost">{product.cost} zl</span>
            <button onClick={(e) => {e.stopPropagation(); // Остановка всплытия события
                onDel(index);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
