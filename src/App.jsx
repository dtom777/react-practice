import React, { useEffect, useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    return () => {
      if (num > 0) {
        if (num % 3 === 0) {
          faceShowFlag || setFaceShowFlag(true);
        } else {
          faceShowFlag && setFaceShowFlag(false);
        }
      }
    };
  }, [num]);

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>countUp</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
