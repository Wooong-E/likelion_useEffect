import React, { useEffect, useState } from 'react';

// useEffect : 컴포넌트 랜더링과 관련없는 작업을 수행하기 위해 필요.
//   1. 백서버와의 통신
//   2. 이미지 불러오기
//   3. HTML요소들을 JS로 바꾸기
//   4. 랜더링 이후 적업 처리 필요할 때, 컴포넌트 생명주기 관리(Mount, Update, Unmount)를 구분하여 코드 작성 가능.
const HookStructure = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('empty text..');

  useEffect(() => {
    // mount 때 (1번)
    console.log('컴포넌트가 마운트 됨.');
  }, []);

  useEffect(() => {
    console.log('카운트가 변경되었음: ', count);
  }, [count]);

  useEffect(() => {
    console.log('텍스트가 변경되었음: ', text);
  }, [text]);

  useEffect(() => {
    // update 때 (State or Props 변경으로 다시 그려질 떄 마다)
    console.log('매 랜더링마다 랜더링 됨.');
  });

  return (
    <div>
      <h2 className="text-2xl">Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="border">
        Increment
      </button>
      <hr className="text-gray-300" />
      <h2 className="text-2xl">Typed text: {text}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border"
      />
    </div>
  );
};

export default HookStructure;
