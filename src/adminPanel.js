import './adminka.css';
const AdminMenu = () =>{
    return (
        <div className='panel_wrapper'>
            <input className="name" type="text" placeholder='Название' />
            <select>
                <option value="kg" key="">КГ</option>
                <option value="gr" key="">ГР</option>
                <option value="unit" key="">ШТ</option>
            </select>
            <input className="count" type="number" placeholder='количество'/>
            <input className="cost" type="number" placeholder='стоимость' />
            <button className='add's>+</button>
        </div>
    );
}
export default AdminMenu;