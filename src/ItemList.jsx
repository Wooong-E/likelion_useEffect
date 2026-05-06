import { useEffect, useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('useEffect 실행됨.');
  }, [items]);

  const addItem = () => {
    const newItem = prompt('newItem을 입력하세요: ');
    if (newItem) {
      // items.push(newItem) 금지!!!!!!! 객체가 안바뀜.
      setItems((prevItem) => [...prevItem, newItem]);
    }
  };

  return (
    <div className="flex flex-col mx-30 mt-20 p-20 bg-green-600 border rounded-[40px] text-center">
      <h2 className="text-[60px] font-black">Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem} className="border">
        Add Item
      </button>
    </div>
  );
};

export default ItemList;
