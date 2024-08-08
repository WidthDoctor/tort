import React, { useState } from 'react';
import './App.css';
import AdminMenu from "./adminPanel";
import Products from "./products"
import PopUp from "./popup";
function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [products, setProducts] = useState([]);
  let currentProduct = {};
  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };
  const onTap = (product) =>{//нажатие на продукт
    setShowPopUp(true);
    console.log(product);
    currentProduct = product;
    console.log(currentProduct);

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
      {showPopUp && <PopUp onClose={onClose} />}
      </div>
      </div>
    </div>
  );
}

export default App;