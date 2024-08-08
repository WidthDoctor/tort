import React, { useState } from 'react';
import './adminka.css';
const AdminMenu = ({onAddProduct}) =>{
    const [name, setName] = useState('');
  const [unit, setUnit] = useState('кило');
  const [count, setCount] = useState('');
  const [cost, setCost] = useState('');
  const handleAddProduct = () => {
    const product = {
      name,
      unit,
      count,
      cost
    };
    onAddProduct(product);
    // Сброс полей после добавления
    setName('');
    setUnit('кило');
    setCount('');
    setCost('');
  };
  return (
    <div className='panel_wrapper'>
      <input className="name" type="text" placeholder='Название' value={name} onChange={(e) => setName(e.target.value)} />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="кило">КГ</option>
        <option value="грамм">ГР</option>
        <option value="штук">ШТ</option>
      </select>
      <input className="count" type="number" placeholder='количество' value={count} onChange={(e) => setCount(e.target.value)} />
      <input className="cost" type="number" placeholder='стоимость' value={cost} onChange={(e) => setCost(e.target.value)} />
      <button className='add' onClick={handleAddProduct}>+</button>
    </div>
  );
};
export default AdminMenu;