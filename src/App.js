import React, { useState } from 'react';
import './App.css';
import AdminMenu from "./adminPanel";
import Products from "./products"
import PopUp from "./popup";
import Used from "./used"
function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [currentProductToUsed, setCurrentProductToUsed] = useState([]);
  const [usedProductCount, setUsedProductCount] = useState(null);
  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };
  const count = (usedValue) =>{
    const { count, cost } = currentProduct;

    const totalAmount = parseFloat(count); // Общее количество продукта
    const usedAmount = parseFloat(usedValue); // Количество, которое было использовано
    const totalCost = parseFloat(cost); // Общая стоимость продукта
    const usedCost = (usedAmount / totalAmount) * totalCost;
    const roundedUsedCost = parseFloat(usedCost.toFixed(2));
    setUsedProductCount(roundedUsedCost);
    setCurrentProductToUsed(currentProduct);
    //???????!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }
  const onTap = (product) =>{//нажатие на продукт
    setShowPopUp(true);
    // console.log(product);
    setCurrentProduct(product);
  }
  const onClose = (index) =>{//закрытие попапа
    setShowPopUp(false);
  }
  return (
    <div className="App">
      <header className="header_wrapper">
      < AdminMenu onAddProduct={addProduct} />
      </header>
      <div className='content_wrapper'>
      <div className="products_wrapper">
      <Products products={products} onDel={deleteProduct} onTap={onTap} />
      <Used currentProductToUsed={currentProductToUsed} usedProductCount={usedProductCount} onDel={deleteProduct} />
      {showPopUp && <PopUp toCount = {count} onClose={onClose} />}
      </div>
      </div>
    </div>
  );
}

export default App;