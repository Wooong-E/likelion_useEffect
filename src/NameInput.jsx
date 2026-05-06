import React, { useEffect } from 'react';
import { useState } from 'react';

const NameInput = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const containerStyle = 'max-w-md mx-auto mt-10 p-10 bg-stone-200 rounded-xl';
  const headingStyle = 'text-2xl font-bold mb-4';
  const inputStyle =
    'border border-gray-300 bg-white/50 rounded-lg px-3 py-2 w-50 mb-4';
  const greetingStyle = 'text-lg text-blue-600 font-medium';
  const nameStyle = 'font-bold text-orange-600';

  return (
    <div className={containerStyle}>
      <h2 className={headingStyle}>이름을 입력하세요 ⬇️</h2>
      <input className={inputStyle} type="text" onChange={handleChange} />
      <p className={greetingStyle}>
        안녕하세요,
        <span className={nameStyle}>{name} 님!</span>
      </p>
    </div>
  );
};

export default NameInput;
