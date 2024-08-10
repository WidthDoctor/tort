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
  const [usedProductCount, setUsedProductCount] = useState([]);//посчитанная цена
  const [valueUsedInput,setValueInput] = useState([]);

  const addUsedProduct = (newProduct) => {
    setCurrentProductToUsed([...currentProductToUsed, newProduct]); // Добавляем новый продукт в массив
  };
  const addUsedCost = (newCost) => {
    setUsedProductCount([...usedProductCount, newCost]); // Добавляем новый продукт в массив
  };
  const addValueInput = (newValue) => {
    setValueInput([...valueUsedInput, newValue]); // Добавляем новый продукт в массив
  };
  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };
  const deleteUsedProduct = (index) => {
    const updatedProducts = currentProductToUsed.filter((_, i) => i !== index);
    setCurrentProductToUsed(updatedProducts);
  };
  const deleteUsedCount = (valueToRemove,InputValueToRemove) => {
    const updatedCost = usedProductCount.filter((value) => value !== valueToRemove);
    const updatedValue = valueUsedInput.filter((value) => value !== InputValueToRemove);
    setValueInput(updatedValue);//удаляет число из массива Value что вводит пользователь и это число рядом с килограммами
    setUsedProductCount(updatedCost);
  };
  const count = (usedValue) =>{
    addValueInput(usedValue);
//тут берем usedValue и пердолим его в хук
    const { count, cost } = currentProduct;

    const totalAmount = parseFloat(count); // Общее количество продукта
    const usedAmount = parseFloat(usedValue); // Количество, которое было использовано
    const totalCost = parseFloat(cost); // Общая стоимость продукта
    const usedCost = (usedAmount / totalAmount) * totalCost;
    const roundedUsedCost = parseFloat(usedCost.toFixed(2));
    addUsedCost(roundedUsedCost);
    addUsedProduct(currentProduct);
    onClose();
  }
  const calculateAllUsedProducts = (usedProductCount) => {
    console.log(usedProductCount);

    const totalSpan = document.getElementsByClassName('totalSpan')[0]; // выбираем первый элемент с классом totalSpan

    // Суммируем все значения в массиве, если он не пустой
    const total = usedProductCount.length > 0
        ? usedProductCount.reduce((acc, val) => acc + parseFloat(val), 0)
        : 0;

    // Обновляем текстовое содержимое элемента totalSpan
    totalSpan.textContent = `сумма ресурсов ${total.toFixed(2)} zl`;

    // Рекурсивный вызов с таймаутом 1 секунда
  };
  setTimeout(() => calculateAllUsedProducts(usedProductCount), 1000);
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
      <Used valueUsedInput={valueUsedInput}currentProductToUsed={currentProductToUsed} usedProductCount={usedProductCount} onDelCount={deleteUsedCount} onDelUsed={deleteUsedProduct} />
      {showPopUp && <PopUp toCount = {count} onClose={onClose} />}
      </div>
      <span className='totalSpan'></span>
      </div>
    </div>
  );
}

export default App;