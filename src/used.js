import "./products.css";

const Used = ({ currentProductToUsed, usedProductCount, onDelUsed,onDelCount, valueUsedInput }) => {
  const productsArray = Array.isArray(currentProductToUsed) ? currentProductToUsed : [currentProductToUsed];
  console.log(productsArray);

  return (
    <div>
      <h1>Использовано</h1>
      <div className="all_Products">
        {productsArray.map((product, index) => (
          <div key={index} className="product">
            <span className="name">{product.name}</span>
            <span className="howMutch">{valueUsedInput[index]} {product.unit}</span>
            <span className="cost">{usedProductCount[index]} zl</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelCount(usedProductCount[index],valueUsedInput[index])
                onDelUsed(index);
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