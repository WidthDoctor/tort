import "./products.css";

const Used = ({ currentProductToUsed, usedProductCount,onDel }) => {
  return (
    <div>
      <h1>Использовано</h1>
      <div className="all_Products">
        {currentProductToUsed.map((product, index) => (
          <div key={index} className="product">
            <span className="name">{product.name}</span>
            <span className="howMutch">
              {product.unit}
            </span>
            <span className="cost">{usedProductCount} zl</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
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
export default Used;
